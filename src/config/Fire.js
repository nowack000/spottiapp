import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDDQV0O6jawTXfKE7fngZ2oQfc1ZYWj2bw",
    authDomain: "spotti-a8462.firebaseapp.com",
    databaseURL: "https://spotti-a8462.firebaseio.com",
    projectId: "spotti-a8462",
    storageBucket: "spotti-a8462.appspot.com",
    messagingSenderId: "487878390017"
};
const fire = firebase.initializeApp(config);

export default fire;
export {config};