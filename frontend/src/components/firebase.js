import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.AIzaSyDEbzt9TfJJZZxuZsH_qXv3eeb5g62GgmE,
    authDomain: process.env.my-finalproject-2b552.firebaseapp.com,
    databaseURL: process.env.
    projectId: process.env.my-finalproject-2b552,
    storageBucket: process.env.my-finalproject-2b552.appspot.com,
    messagingSenderId: process.env.512038742459,
};

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }
}

export default Firebase;
