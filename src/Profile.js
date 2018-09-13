import React, {Component} from 'react';
import fire from './config/Fire';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            name: '',
            age: '',
            sex: ''
        };
    }

    componentDidMount() {
        document.getElementById('profileForm').addEventListener('submit', submitForm);

        // var firebaseSetUser = fire.auth().currentUser;


        // function reauthenticateUser(e){
        //     e.preventDefault();
        // var credential = fire.auth.EmailAuthProvider.credential(firebaseSetUser.email,firebaseSetUser.password);
        // // Prompt the user to re-provide their sign-in credentials
        //
        // firebaseSetUser.reauthenticateAndRetrieveDataWithCredential(credential).then(function () {
        //     // User re-authenticated.
        // }).catch(function (error) {
        //     // An error happened.
        // });
        // }
        var user = fire.auth().currentUser;

        function submitForm(e) {
            e.preventDefault();

            let email = getInputVal('email');
            let name = getInputVal('name');
            let age = getInputVal('age');
            let sex = getInputVal('user-sex');

            // firebaseSetUser.updateProfile({
            //     displayName: name,
            //     age: age,
            //     email: email
            // }).then(function()
            //     // Update successful.
            // }).catch(function(error) {
            //     // An error happened.
            // });
            var usersData = fire.database().ref().child('Users');
            var usersDataChild = usersData.child(user.uid);
            var usersDataChildName = usersDataChild.child('Name').set(name);
            var usersDataChildAge = usersDataChild.child('Age').set(age);
            var usersDataChildSex = usersDataChild.child('Sex').set(sex);

        }

        let getUserName = fire.database().ref('Users').child(user.uid).child('Name');
        getUserName.on('value', snap => {
            this.setState({
                name: snap.val()
            });
            console.log(snap.val());
        });

        let getUserAge = fire.database().ref('Users').child(user.uid).child('Age');
        getUserAge.on('value', snap => {
            this.setState({
                age: snap.val()
            });
            console.log(snap.val());
        });

        let getUserSex = fire.database().ref('Users').child(user.uid).child('Sex');
        getUserSex.on('value', snap => {
            this.setState({
                sex: snap.val()
            });
            console.log(snap.val());
        });


        function getInputVal(id) {
            return document.getElementById(id).value;

        }

        var email, uid, emailVerified;

        if (user != null) {
            email = user.email;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
        }
        this.setState({
            email: email,
            uid: uid
        });

        // this.reauthenticateEmail = () => {
        //     this.useremail = window.prompt("podaj email");
        //     this.userpass = window.prompt("podaj haslo");
        //     const credential = fire.auth.EmailAuthProvider.credential(
        //         this.useremail,
        //         this.userpass
        //     );
        //     user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
        //         // User re-authenticated.
        //     }).catch(function(error) {
        //         // An error happened.
        //     });
        // }




    }

    render() {

        return (
            <div>

                <div className="container">
                    <form id='profileForm' name="form-test" action="" method="get">
                        <div className="row">
                            <div className="col-xs-3 form-group">
                                <label htmlFor="name">
                                    Imię:
                                </label>
                                <input type="text" id="name" name="name" className="form-control"
                                       placeholder={this.state.name}/>
                            </div>
                            <div className="col-xs-4 form-group">
                                <label htmlFor="surname">
                                    Adres email:
                                </label>
                                <input type="email" id="email" name="email" className="form-control"
                                       placeholder={this.state.email}/>
                                <small>(Email można zmienić jedynie bezpośrednio po rejestracji)</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 form-group">
                                <label htmlFor="age">
                                    Wiek:
                                </label>
                                <input type="number" id="age" name="age" className="form-control"
                                       placeholder={this.state.age}/>
                            </div>
                        </div>

                        <label htmlFor="sex">
                            Płeć:
                        </label>
                        <div className="col-xs-6">
                            <select id='user-sex'>
                                <option selected disabled='disabled'>{this.state.sex}</option>
                                <option name="female" id="sex" value="Kobieta">Kobieta</option>
                                <option name="male" id="sex" value="Mężczyzna">Mężczyzna</option>
                                <option name="other" id="sex" value="Inna">Inna</option>
                            </select>
                        </div>

                        <div className="row text-center">
                            <div className="col-xs-12">
                                <input type="submit" value="Zapisz zmiany" name="send"
                                       className="btn btn-lg btn-success"/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}


export default Profile;