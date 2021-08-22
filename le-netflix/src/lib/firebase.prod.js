import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDVqS-IQbdOzGg2rKuzCkoZWdtCZStMkRg",
  authDomain: "le-netflix.firebaseapp.com",
  projectId: "le-netflix",
  storageBucket: "le-netflix.appspot.com",
  messagingSenderId: "796638260210",
  appId: "1:796638260210:web:4158732d24c65abc77d96b",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
