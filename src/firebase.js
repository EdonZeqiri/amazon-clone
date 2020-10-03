import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOXh1b8fTNnS1pwYm164fysSm6W0ON-ZA",
    authDomain: "clone-f0c06.firebaseapp.com",
    databaseURL: "https://clone-f0c06.firebaseio.com",
    projectId: "clone-f0c06",
    storageBucket: "clone-f0c06.appspot.com",
    messagingSenderId: "268332547671",
    appId: "1:268332547671:web:a330e3767d67ee66f52d12",
    measurementId: "G-T642Z57F9W"
})

const auth = firebase.auth()

export {auth}