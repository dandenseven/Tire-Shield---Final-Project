from firebase_admin import credentials, firestore, initialize_app

class Vehicle:

    vehicle_ref = "" # we could set this later at runtime
    
    def __init__(self, make, model, total_miles, tire_miles, 
                    tire_purchase_date, rotation_miles, color, user_id, vehicle_id):
        self.make = make
        self.model = model
        self.total_miles = total_miles
        self.tire_miles = tire_miles
        self.tire_purchase_date = tire_purchase_date
        self.rotation_miles = rotation_miles
        self.color = color
        self.user_id = user_id
        self.vehicle_id = vehicle_id
        


    def to_json(self):
        return {"make": self.make, 
                "model": self.model, 
                "total_miles": self.total_miles, 
                "tire_miles": self.tire_miles,
                "tire_purchase_date": self.tire_purchase_date,
                "rotation_miles": self.rotation_miles,
                "color": self.color,
                "user_id": self.user_id,
                "vehicle_id": self.vehicle_id
               }

    def insert(self):
        self.vehicle_ref.document_id().set(self.to_json())
        return self.document_id.create("vehicle_id", "==", vehicle_id).get()

    def update(self):
        self.vehicle_ref.document(self.vehicle_id).set(self.to_json())

    def delete(self):
        self.vehicle_ref.document(self.vehicle_id).delete(self.to_json())

    @classmethod
    def vehicles_for_user(cls, user_id):
        return cls.vehicle_ref.where("user_id", "==", user_id).get()


if __name__ == "__main__":
    pass