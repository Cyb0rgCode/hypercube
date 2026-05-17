"""
Dev server with live-reload.

    pip install livereload
    python run.py

Watches templates/ and static/ — the browser refreshes automatically
whenever you save any HTML, CSS, or JS file.  The full Flask app
(auth, DB, all API routes) runs exactly as in production.
"""

from livereload import Server
from app import app

server = Server(app.wsgi_app)

# Watch every file you'd edit during layout work
server.watch("templates/")
server.watch("static/css/")
server.watch("static/js/")

server.serve(port=5000, host="0.0.0.0", debug=True)
