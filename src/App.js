import React, {Component} from 'react';
import './App.css';
import fire from './config/Fire';
import Login from './Login';
// import ShowMap from "./Map";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// import classNames from 'classnames';
// import Profile from "./Profile"
import Home from "./Home"


class App extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);


    }

    componentDidMount() {
        this.authListener();
    }


    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                this.setState({user});
                // localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
                // localStorage.removeItem('user');
            }
        });
    }


    render() {

        return (

            <Router>
                <div id="Application">
                    {this.state.user ? (<Home/>) : (<Login/>)}
                </div>
            </Router>
        );
    }
}


export default App;
