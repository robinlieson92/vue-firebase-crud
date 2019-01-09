import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyBAIY57e-iH43s95VEdLkPn8ki9nwAP700",
  authDomain: "vue-firebase-crud-68c0f.firebaseapp.com",
  databaseURL: "https://vue-firebase-crud-68c0f.firebaseio.com",
  projectId: "vue-firebase-crud-68c0f",
  storageBucket: "vue-firebase-crud-68c0f.appspot.com",
  messagingSenderId: "1013503918276"
};

let appFire = firebase.initializeApp(config);

export const db = appFire.firestore();
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);
export default appFire;
