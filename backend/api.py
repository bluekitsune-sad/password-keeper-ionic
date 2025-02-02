from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

example = {
    "john_doe": {
        "username": "john_doe",
        "password": "securepassword",
        "saved_passwords": [
            {"name": "Work", "pass": "workpass123"},
            {"name": "Personal", "pass": "mypersonalpass"},
        ],
    }
}

mongodb_uri = mongoKey

if mongodb_uri:
    client = MongoClient(mongodb_uri)
    db = client['cloud_db']
else:
    client = MongoClient('mongodb://localhost:27017/')
    db = client['local_db']

@app.route('/', methods=['GET', 'POST'])
def welcome():
    return "Home Page"

@app.route('/addUser', methods=['POST'])
def add_user():
    data = request.get_json()

    if 'username' not in data or 'password' not in data:
        return jsonify({"error": "Username and password are required"}), 400

    username = data['username']
    password = data['password']

    # Check if the username already exists in MongoDB
    if db.users.find_one({'username': username}):
        return jsonify({"error": "Username already exists"}), 409

    # Add the new user to MongoDB
    db.users.insert_one({
        "username": username,
        "password": password,
        "saved_passwords": [],
    })

    return jsonify({"message": "User added successfully", "user_data": data}), 201

@app.route('/getUser/<username>', methods=['GET'])
def get_user(username):
    user = db.users.find_one({'username': username})

    if user:
        user['_id'] = str(user['_id'])
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
