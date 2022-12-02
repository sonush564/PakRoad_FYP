import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmrkkK-SN14KpwhWWVBmB052jjtJWMi0c",
    authDomain: "traffic-2e889.firebaseapp.com",
    databaseURL: "https://traffic-2e889-default-rtdb.firebaseio.com",
    projectId: "traffic-2e889",
    storageBucket: "traffic-2e889.appspot.com",
    messagingSenderId: "530960139197",
    appId: "1:530960139197:web:3e6a15debd2c94576448d4"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();


export default db;