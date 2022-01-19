import firebase from "firebase";
import "firebase/firestore";

console.log(firebase.app.length > 0);
if (firebase.app.length > 0 || firebase.app.length != 1) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
