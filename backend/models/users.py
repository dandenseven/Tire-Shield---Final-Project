from firebase_admin import credentials, firestore, initialize_app
import datetime
import React from 'react'

class Users:


    users_ref = ""


    def __init__(self, username="", email="", first_name="", last_name="",
                    home_lat=None, home_long=None, last_login=float, user_id=None):
        
        self.username = username
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        self.home_lat = home_lat
        self.home_long = home_long
        self.last_login = last_login
        self.user_id = user_id

  
        # etc. etc. etc...

    def to_json(self):
        return {"username": self.username,
                "email": self.email,
                "first_name": self.first_name,
                "last_name": self.last_name,
                "home_lat": self.home_lat,
                "home_long": self.home_long,
                "last_login": self.last_login
                }


    def user_status(self):
        current_time = datetime.datetime.now()
        trips = Trip.trips_for_user(self.user_id)
        vehicles = Vehicle.vehicles_for_user(self.user_id)
        for trip in trips:
            if self.last_login < trip.end_date < current_time:
                for vehicle in vehicles:
                    if vehicle.vehicle_id == trip.vehicle_id:
                # update miles of vehicle here
                        vehicle.total_miles += trip.distance
                # save and send back to firebase to updated
                        
                        Vehicle.vehicle_ref.document(trip.vehicle_id).set({"total_miles": vehicle.total_miles})

                    
                #update user last login to be the current time
    self.user_ref.documet(self.user_id).set({"last_login": current_time})
                # return trips and vehicles to react
    return {"trips": trips, "vehicles": vehicles}
                    
                        
            


    def insert(self):
        self.users_ref.document().set(self.to_json())
        


    def logout(self):
        self.users_ref.document().update(self.to_json())

    def update(self):
        self.users_ref.document(self.user_id).update(self.to_json())
    
    def delete(self):
        self.users_ref.document(self.user_id).delete(self.to_json())

    @classmethod
    def users_for_user(cls, user_id):
        return cls.users_ref.where("user_id", "==", user_id).get()


    @classmethod
    def login(cls, email, password):
        return cls.users_ref.where("email", "==", email).where("password", "==", 
                                    password).get()
    
            

if __name__ == "__main__":
    pass