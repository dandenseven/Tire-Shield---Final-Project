from firebase_admin import credentials, firestore, initialize_app


class Users:

    users_ref = ""
    
    def __init__(self, username=username, email=email, first_name=first_name, last_name=last_name,
                    home_lat=home_lat, home_long=home_long, user_id=user_id):
        self.username = username
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        self.home_lat = home_lat
        self.home_long = home_long
        self.user_id = user_id

  
        # etc. etc. etc...

    def to_json(self):
        return {"username": self.username,
                "email": self.email,
                "first_name": self.first_name,
                "last_name": self.last_name,
                "home_lat": self.home_lat,
                "home_long": self.home_long,
                 
                
                }

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