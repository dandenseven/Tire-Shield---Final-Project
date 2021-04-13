import os
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
from models.vehicle import Vehicle
from models.trip import Trip
from models.users import Users

app = Flask(__name__)

# cred = credentials.Certificate('key.json')


# default_app = initialize_app(cred)
# db = firestore.client()
# # todo_ref = db.collection('todos')
# Users.users_ref = db.collection('users')
# Vehicle.vehicle_ref = db.collection('vehicle')
# Trip.trip_ref = db.collection('trip')

@app.route("/api/users_add", methods=["POST"])
def users_create():
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    try:
        
        user_id = request.json.get("user_id")
        username = request.json.get("username")
        password = request.json.get("password")
        email = request.json.get("email")
        first_name = request.json.get("first_name")
        last_name = request.json.get("last_name")
        home_lat = request.json.get("home_lat")
        home_long = request.json.get("home_long")
        new_users = Users(user_id, username, password, email, first_name,
                            last_name, home_lat, home_long)
        new_users.insert()
        # todo_ref.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/vehicle_add", methods=["POST"])
def vehicle_create():
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    try:
       
        user_id = request.json.get("user_id")
        type_vehicle = request.json.get("type")
        make = request.json.get("make")
        model = request.json.get("model")
        total_miles = request.json.get("total_miles")
        tire_miles = request.json.get("tire_miles")
        tire_purchase_date = request.json.get("tire_purchase_date")
        rotation_miles = request.json.get("rotation_miles")
        vehicle_id = request.json.get("vehicle_id")
        new_vehicle = Vehicle(user_id, type_vehicle, make, model, total_miles, tire_miles, 
                                tire_purchase_date, rotation_miles, user_id, vehicle_id)
        new_vehicle.insert()
        # todo_ref.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/create_add", methods=["POST"])
def trip_create():
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    try:
        
        user_id = request.json.get("user_id")
        destination_add  = request.json.get("destination_add")
        start_add = request.json.get("start_add")
        distance = request.json.get("distance")
        weather = request.json.get("weather")
        vehicle_id =request.json.get("vehicle_id")
        new_trip = Trip(user_id, destination_add, start_add, distance,
                        weather, vehicle_id,)
        new_trip.insert()
        # todo_ref.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route("/api/read_users", methods=['GET'])
def users_read():
    """
        read() : Fetches documents from Firestore collection as JSON.
        todo : Return document that matches query ID.
        all_todos : Return all documents.
    """
    try:
        # Check if ID was passed to URL query
        # todo_id = request.args.get('id')
        # if todo_id:
        #     todo = todo_ref.document(todo_id).get()
        #     return jsonify(todo.to_dict()), 200
        # else:
        #     all_todos = [doc.to_dict() for doc in todo_ref.stream()]
        #     return jsonify(all_todos), 200
        user_id = request.args.get(["user_id"])
        if user_id:
            users = Users.users_ref.document(user_id).get()
            return jsonify(users.to_dict()), 200
        else:
            all_users = [doc.to_dict() for doc in Users.users_ref.stream()]
            return jsonify(all_users), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/users_vehicle", methods=["POST", "PUT"])
def vehicle_read():
    """
        read() : Fetches documents from Firestore collection as JSON.
        todo : Return document that matches query ID.
        all_todos : Return all documents.
    """
    try:
        user_id = request.json.get(["user_id"])
        if user_id:
            
            
        

            vehicles = Vehicle.vehicles_for_user(user_id)
            print(vehicles)
            return jsonify(vehicles.to_dict()), 200
        else:
            # all_vehicle = [doc.to_dict() for doc in Vehicle.vehicle_ref.stream()]
            # return jsonify(all_vehicle), 200
            return
    except Exception as e:
        return f"An Error Occured: {e}"

# firebase dqta is organized like:
# "document_id" : {"key1": value1, "key2": 14}

@app.route("/api/users_trip", methods=["POST", "PUT"])
def trip_read():
    """
        read() : Fetches documents from Firestore collection as JSON.
        todo : Return document that matches query ID.
        all_todos : Return all documents.
    """
    try:
        trip_id = request.args.get('id')
        if trip_id:
            trip = Trip.trip_ref.document(trip_id).get()
            return jsonify(trip.to_dict()), 200
        else:
            all_trip = [doc.to_dict() for doc in Trip.trip_ref.stream()]
            return jsonify(all_trip), 200
    except Exception as e:
        return f"An Error Occured: {e}"
   

@app.route("/api/update_users", methods=['POST', 'PUT'])
def update():
    """
        update() : Update document in Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post today'}
    """
    try:
        id = request.json['id']
        users_update = Users()
        users_update.update()
        # todo_ref.document(id).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route("/api/update_vehicle", methods=['POST', 'PUT'])
def vehicle_update():
    """
        update() : Update document in Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post today'}
    """
    try:
        id = request.json['id']
        vehicle_update = Vehicle()
        vehicle_update.update()
        # todo_ref.document(id).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/udate_trip", methods=['POST', 'PUT'])
def trip_update():
    """
        update() : Update document in Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post today'}
    """
    try:
        id = request.json['id']
        trip_update = Trip()
        trip_update.update()
        # todo_ref.document(id).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/delete_users/<id>", methods=['GET', 'DELETE'])
def delete(id):
    """
        delete() : Delete a document from Firestore collection.
    """
    try:
        # Check for ID in URL query
        # todo_id = request.args.get('id')
        # todo_ref.document(id).delete()
        users_delete = Users()
        users_delete.delete()
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/delete_vehicle/<id>", methods=['GET', 'DELETE'])
def vehicle_delete(id):
    """
        delete() : Delete a document from Firestore collection.
    """
    try:
        # Check for ID in URL query
        # todo_id = request.args.get('id')
        # todo_ref.document(id).delete()
        vehicle_delete = Vehicle()
        vehicle_delete.delete()
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/api/delete_trip/<id>", methods=['GET', 'DELETE'])
def trip_delete(id):
    """
        delete() : Delete a document from Firestore collection.
    """
    try:
        # Check for ID in URL query
        # todo_id = request.args.get('id')
        # todo_ref.document(id).delete()
        trip_delete = Trip()
        trip_delete.delete()
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

vehicle_read()

# create
# curl localhost:8080/add -X POST -H "Content-Type: application/json" -d '{"id": "1", "destination": "NYC", "vehicle": "toyota"}'
# update
# curl localhost:8080/update -X POST -H "Content-Type: application/json" -d '{"id": "1", "title": "new lists"}'
# delete
# curl localhost:8080/delete/2
# read



port = int(os.environ.get('PORT', 8080))
if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port)