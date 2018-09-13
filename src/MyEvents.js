import React, {Component} from 'react';
import "./App.css"
import firebase from "firebase";


function searchingFor(key) {
    return x => {
        return x.description.toLowerCase().includes(key.toLowerCase()) || !key;
    }
}

class MyEvents extends Component {
    constructor(props) {
        super(props);
        this.returnArr = [];

        this.state = {
            key: '',
            evts: this.returnArr
        };


        console.log(this.returnArr);
        this.updateSearch = (event) => {
            this.setState({
                key: event.target.value
            })
        }

    }

    componentWillMount() {
        this.snapshotToArray = (snapshot) => {
            var returnArr = this.returnArr;
            snapshot.forEach(function (childSnapshot) {
                var description = childSnapshot.val()[2];
                var mail = childSnapshot.val()[3];
                // var key = childSnapshot.key;
                // console.log(childSnapshot.key);

                returnArr.push({description, mail});
            });
            return returnArr;

        };

        firebase.database().ref().child('Markers').on('value', snapshot => {
            this.snapshotToArray(snapshot);

        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <h2>Znajdź interesującą Cię frazę:</h2>
                    <div className="col-lg-12">
                        <input type="search" className="form-control event-search" id="input-search"
                               placeholder="Szukaj we wszystkich wydarzeniach" value={this.state.key}
                               onChange={this.updateSearch}/>
                        <div>
                            <ul>
                                {this.state.evts.filter(searchingFor(this.state.key)).map(contact =>
                                    <div id="search-list" key={contact.description}>
                                        <div>Użytkownik:</div>
                                        <h5>{contact.mail}</h5>
                                        <div>szuka:</div>
                                        <h5>{contact.description}</h5>
                                        <h1></h1>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default MyEvents;