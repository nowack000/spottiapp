import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import fire from './config/Fire';


class User extends Component {


    render() {

        var user = fire.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
        }
        console.log(email);

        return (
            <div>{email}</div>
        );
    }
}


export default User;