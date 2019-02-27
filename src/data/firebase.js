import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBf5zC4IGuwxrd4b2ODLhrcJDawnAFnofc",
    authDomain: "edteam-16c7c.firebaseapp.com",
    databaseURL: "https://edteam-16c7c.firebaseio.com",
    projectId: "edteam-16c7c",
    storageBucket: "edteam-16c7c.appspot.com",
    messagingSenderId: "545826119455"
  };

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth