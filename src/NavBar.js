import React, {Component} from 'react';
import fire from './config/Fire'
// import ShowMap from "./Map";
// import User from "./User"
import classNames from "classnames";
import {Link} from 'react-router-dom';

// import Profile from "./Profile";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
        }

    }

    handleChange() {
        this.setState({
            opened: !this.state.opened,
        })
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        var user = fire.auth().currentUser;

        const btnClasses = classNames({
            'animated-icon3': true,
            'navbar-collapse': true,
            'open': this.state.opened,
        });


        return (
            <div>
                <div>
                    <nav className="navbar navbar-dark elegant-color lighten-1 mb-4">
                        <Link className="navbar-brand" to="/">

                            <span> </span>Witaj {user.email != null ? user.email : "Nieznajomy"} !


                        </Link>
                        <button onClick={() => this.handleChange()} className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarSupportedContent23"
                                aria-controls="navbarSupportedContent23"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <div className={btnClasses}><span></span><span></span><span></span><span></span></div>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent23">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/Profile"}>Profil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/myevents">Moje eventy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={this.logout.bind(this)} to="#">Wyloguj</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}


export default NavBar;