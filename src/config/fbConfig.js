import firebase from 'firebase/app';
import 'firebase/auth';
import  'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBIWFWQcpHoamU4T9SR1T5xbQ-KthV5Wd0",
  authDomain: "todo-list-5be0e.firebaseapp.com",
  databaseURL: "https://todo-list-5be0e.firebaseio.com",
  projectId: "todo-list-5be0e",
  storageBucket: "todo-list-5be0e.appspot.com",
  messagingSenderId: "896353919124",
  appId: "1:896353919124:web:6ab7d16ddc0cd350771481",
  measurementId: "G-VFVT5HPFKT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots: true});
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
export default firebase;
//export default config;