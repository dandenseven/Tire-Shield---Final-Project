from firebase_admin import credentials, firestore, initialize_app

class Vehicle:

    vehicle_ref = "" # we could set this later at runtime
    
    def __init__(self, type_vehicle, make, model, total_miles, tire_miles, 
                    tire_purchase_date, rotation_miles, user_id, vehicle_id):
        self.type = type_vehicle
        self.make = make
        self.model = model
        self.total_miles = total_miles
        self.tire_miles = tire_miles
        self.tire_purchase_date = tire_purchase_date
        self.rotation_miles = rotation_miles
        self.user_id = user_id
        self.vehicle_id = vehicle_id


    def to_json(self):
        return {"type_vehicle": self.type,
                "make": self.make, 
                "model": self.model, 
                "total_miles": self.total_miles, 
                "tire_miles": self.tire_miles,
                "tire_purchase_date": self.tire_purchase_date,
                "rotation_miles": self.rotation_miles,
                "user_id": self.user_id, 
                "vehicle_id": self.vehicle_id # may also not exist yet for new vehicle
               }

    def insert(self):
        self.vehicle_ref.document().set(self.to_json())

    def update(self):
        self.vehicle_ref.document(self.vehicle_id).set(self.to_json())

    def delete(self):
        self.vehicle_ref.document(self.vehicle_id).delete(self.to_json())

    @classmethod
    def vehicles_for_users(cls, user_id):
        return cls.vehicle_ref.where("user_id", "==", user_id).get()


if __name__ == "__main__":
    pass