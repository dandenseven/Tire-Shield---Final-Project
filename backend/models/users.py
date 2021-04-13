from firebase_admin import credentials, firestore, initialize_app


class Users:

    users_ref = ""
    
    def __init__(self, username, password, email, first_name, last_name,
                    home_lat, home_long, user_id):
        self.username = username
        self.password = password
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        self.home_lat = home_lat
        self.home_long = home_long
        self.user_id = user_id
        # etc. etc. etc...

    def to_json(self):
        return {"username": self.username,
                "password": self.password, 
                "email": self.email,
                "first_name": self.first_name,
                "last_name": self.last_name,
                "home_lat": self.home_lat,
                "home_long": self.home_long, 
                "user_id": self.user_id
                }

    def insert(self):
        self.users_ref.document().set(self.to_json())
        data


    def logout(self):
        self.users_ref.document().update(self.to_json())

    def update(self):
        self.users_ref.document(self.user_id).update(self.to_json())
    
    def delete(self):
        self.users_ref.document(self.user_id).delete(self.to_json())

    @classmethod
    def login(cls, username, password):
        return cls.users_ref.where("email", )

