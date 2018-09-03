import firebase from "firebase"
var config = {
    apiKey: "AIzaSyBwZfK45PM_iGl4-IERX54Oi3ZDLI6U32c",
    authDomain: "cdlu-foodwaste2-0.firebaseapp.com",
    databaseURL: "https://cdlu-foodwaste2-0.firebaseio.com",
    projectId: "cdlu-foodwaste2-0",
    storageBucket: "cdlu-foodwaste2-0.appspot.com",
    messagingSenderId: "365214210350"
}

var fire = firebase.initializeApp(config);
export default fire;