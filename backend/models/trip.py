from firebase_admin import credentials, firestore, initialize_app


class Trip:


    trip_ref = ""
    
    
    def __init__(self, start_add, destination_add, distance,
                    weather, start_date, end_date, vehicle_id, user_id):
        self.start_add  = start_add
        self.destination_add = destination_add
        self.distance = distance
        self.weather = weather
        self.start_date = start_date
        self.end_date = end_date
        self.vehicle_id = vehicle_id 
        self.user_id = user_id

    def to_json(self):
        return {"start_add": self.start_add, 
                "destination_add": self.destination_add,
                "distance": self.distance,
                "weather": self.weather,
                "start_date": self.start_date,
                "end_date": self.end_date,
                "vehicle_id": self.vehicle_id,
                "user_id": self.user_id
                }


    def insert(self):
        self.trip_ref.document().set(self.to_json())
    

    def update(self):
        self.trip_ref.document(self.destination_add).set(self.to_json())


    def delete(self):
        self.trip_ref.document(self.vehicle_id, ).delete(self.to_json())
    

    @classmethod
    def trips_for_user(cls, user_id):
        return cls.trip_ref.where("user_id", "==", user_id).get()


