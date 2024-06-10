from flask import Flask, request, render_template, jsonify
import subprocess
from jinja2 import Environment
import re

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/execute', methods=['POST'])
def execute():
    data = request.get_json()
    code = data['code']
    
    try:
        result = subprocess.run(['python3', '-c', code], capture_output=True, text=True)
        output = result.stdout.strip()
        return jsonify({'output': output})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
