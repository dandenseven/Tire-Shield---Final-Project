from firebase_admin import credentials, firestore, initialize_app

class Trip:

    trip_ref = ""
    
    def __init__(self, destination_add, start_add, distance,
                    weather, vehicle_id, user_id):
        self.destination_add  = destination_add
        self.start_add = start_add
        self.distance = distance
        self.weather = weather
        self.vehicle_id = vehicle_id 
        self.user_id = user_id

    def to_json(self):
        return {"destination_add": self.destination_add, 
                "start_add": self.start_add,
                "distance": self.distance,
                "weather": self.weather,
                "vehicle_id": self.vehicle_id,
                "user_id": self.user_id
                }


    def insert(self):
        self.trip_ref.document().set(self.to_json())
    

    def update(self):
        self.trip_ref.document(self.destination_add).set(self.to_json())


    def delete(self):
        self.trip_ref.document(self.vehicle_id, ).delete(self.to_json())