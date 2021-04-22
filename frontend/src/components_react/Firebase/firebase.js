import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDEbzt9TfJJZZxuZsH_qXv3eeb5g62GgmE",
    authDomain: "my-finalproject-2b552.firebaseapp.com",
    databaseURL: "https://my-finalproject-2b552-default-rtdb.firebaseio.com/",
    projectId: "my-finalproject-2b552",
    storageBucket: "my-finalproject-2b552.appspot.com",
    messagingSenderId: "512038742459",
};

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }


    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

}

export default Firebase;
