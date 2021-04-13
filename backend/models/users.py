from firebase_admin import credentials, firestore, initialize_app


class Users:

    users_ref = ""
    
    def __init__(self, username, password, email, name, 
                    home_lat, home_long, users_id):
        self.username = username
        self.password = password
        self.email = email
        self.name = name
        self.home_lat = home_lat
        self.home_long = home_long
        self.users_id = users_id
        # etc. etc. etc...

    def to_json(self):
        return {"username": self.username,
                "password": self.password, 
                "email": self.email, 
                "home_lat": self.home_lat,
                "home_long": self.home_long, 
                "users_id": self.users_id
                }

    def insert(self):
        self.users_ref.document().set(self.to_json())
        data


    def logout(self):
        self.users_ref.document().update(self.to_json())

    def update(self):
        self.users_ref.document(self.users_id).update(self.to_json())
    
    def delete(self):
        self.users_ref.document(self.users_id).delete(self.to_json())

    @classmethod
    def login(cls, username, password):
        cls.users_ref.document(cls.users_id)

