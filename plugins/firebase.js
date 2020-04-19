import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {};
  firebase.initializeApp(config);
  firebase.firestore();
}
const fireDb = firebase.firestore();

export { fireDb };
