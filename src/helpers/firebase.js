import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAYNf8fMR1hf5hL6CiaIIl4ZFp6CA0GRF0",
    authDomain: "test-native-1e054.firebaseapp.com",
    projectId: "test-native-1e054",
    storageBucket: "test-native-1e054.appspot.com",
    messagingSenderId: "5781358253",
    appId: "1:5781358253:web:f4421636c8e1dfe8406824"
};

const appFirebase = initializeApp(firebaseConfig)


export default appFirebase;