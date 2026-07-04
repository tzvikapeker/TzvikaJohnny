@echo off
echo Starting local development server...
echo Pointing default browser to http://localhost:8000
start "" "http://localhost:8000"
python -m http.server 8000
pause
