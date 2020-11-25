import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8JJPVE2aYA_-CXo2y-iP_8gru-N9jmJ0",
  authDomain: "saa-e793b.firebaseapp.com",
  databaseURL: "https://saa-e793b.firebaseio.com",
  projectId: "saa-e793b",
  storageBucket: "saa-e793b.appspot.com",
  messagingSenderId: "795410565576",
  appId: "1:795410565576:web:0723738040886d6453d8fd"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
