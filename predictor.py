"""Lightweight statistical forecaster.

Pure-Python (no numpy / no ML) — works on tiny CPU and the free Render tier.

Method: weighted day-of-week seasonal averaging with a damped recent-trend
bias. Suited to ~30-90 days of daily productivity data, which is what
``/api/forecast`` passes in (last 60 days).
"""

import math
from datetime import date, timedelta


def forecast(values: list, horizon: int = 7) -> list:
    """Return `horizon` predicted daily values given historical `values` (oldest first)."""
    n = len(values)
    if n == 0 or sum(values) == 0:
        return [0.0] * horizon

    today = date.today()

    # Recency weight: half-life of 14 days. A point 14 days old counts half
    # as much as today, 28 days old a quarter as much, etc.
    decay = math.log(2.0) / 14.0

    # Bucket each historical value into its weekday with recency weighting.
    dow_weighted_sum = [0.0] * 7
    dow_weight_total = [0.0] * 7
    for i, v in enumerate(values):
        d = today - timedelta(days=n - 1 - i)
        dow = d.weekday()
        w = math.exp(-decay * (n - 1 - i))
        dow_weighted_sum[dow] += v * w
        dow_weight_total[dow] += w

    overall_mean = sum(values) / n
    dow_means = [
        (dow_weighted_sum[d] / dow_weight_total[d]) if dow_weight_total[d] > 0 else overall_mean
        for d in range(7)
    ]

    # Recent-trend bias: last 14 days vs the 14 days before that. Clipped
    # to [0.7, 1.4] so a noisy week can't blow up the forecast.
    if n >= 28:
        recent = sum(values[-14:]) / 14
        prior = sum(values[-28:-14]) / 14
        if prior > 0:
            trend = max(0.7, min(1.4, recent / prior))
        else:
            trend = 1.0
    else:
        trend = 1.0

    return [
        max(0.0, dow_means[(today + timedelta(days=i + 1)).weekday()] * trend)
        for i in range(horizon)
    ]
