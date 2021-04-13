# from flask import Flask, request, jsonify
# from firebase_admin import credentials, firestore, initialize_app
# from models.users import Users 
# from models.trip import Trip 
# from models.vehicle import Vehicle 

# app = Flask(__name__)

# cred = credentials.Certificate('../key.json')
# default_app = initialize_app(cred)
# db = firestore.client()
# Vehicle.vehicle_ref = db.collection('vehicle')



# @app.route("api/create", methods=["POST"])
# def create_users():
#     data = request.get_json()
#     username = data.get("username")
#     password = data.get("password")
#     email = data.get("email")
#     if not users:
#         users_id = Users.random_users_id()
#         new_user = Users(username, password, email, user_id)
#         new_user.insert()
#         return jsonify({"user_id": new_user.user_id, "username": new_user_id.username, "email": new_user_id.email})
#     return jsonify({"users_id": None, "username": "", "email": ""})

#     # def to_json(self)

# @app.route("/api/logout/<token>", methods=["GET"])
# def logout(token):
#     # users = Users.token_authenticate(token)
#     users.user_id = None
#     users.update()
#     return jsonify({"users_id": None})


# @app.route("api/update", methods=["POST"])
# def update_users():
#     data = request.get_json()
#     username = data.get("username")
#     password = data.get("password")
#     email = data.get("email")
#     if not users:
#         users_id = Users.random_users_id()
       










