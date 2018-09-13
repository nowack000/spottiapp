// import ReactDOM from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min';
import './Map.css';
import firebase from 'firebase';
// import fire, {config} from './config/Fire';
import React, {Component} from 'react';
// import GeoFire from 'geofire'
// import user from "./User"
// import email from "./User"
import "./App.css"
import fire from "./config/Fire";
// import getUserName from './Profile'



class ShowMap extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
//Podstawowa konfiguracja mapy
        mapboxgl.accessToken = "pk.eyJ1IjoibWFyaXVzei1ub3dhY2tpIiwiYSI6ImNqamZoNWM2OTRqcWgzd3MyMDhydzE5cDUifQ.UW2-DWcPjftJRUEDSsKeDw";

        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mariusz-nowacki/cjjfycsa7a9iz2rmf1kufv810',
            zoom: 17,
            center: [0, 0]
        });

        var map = this.map;

        this.map.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken
        }));

        var geo = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true
        });
        this.map.addControl(geo, 'bottom-right');

        var nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, 'bottom-left');

        this.map.doubleClickZoom.disable();


// Wyświetlanie i dodawanie markerów do mapy

        // Generate a random Firebase location
        this.firebaseSetRef = firebase.database().ref().child('Markers').push();
        this.firebaseGetRef = firebase.database().ref().child('Markers');

        this.map.on('dblclick', (event) => {
            var user = fire.auth().currentUser;
            this.userWish = window.prompt("Wpisz czego lub kogo szukasz", "Szukam...");
            this.firebaseSetRef.set([event.lngLat.lng, event.lngLat.lat, this.userWish, user.email]);

        });

        this.map.on('load', () => {

            this.firebaseGetRef.on('value', snapshot => {
                snapshot.forEach(childSnapshot => {
                    this.marker = new mapboxgl.Marker(
                        {
                            color: '#7ad8ff'//'#ff1e29'
                            // }).setLngLat([18.612037584189693,54.38686535743409]).addTo(map);
                        }).setLngLat([childSnapshot.val()[0], childSnapshot.val()[1]])
                        .setPopup(new mapboxgl.Popup({offset: 25})
                            .setHTML("<div class='popups-bold'>" + childSnapshot.val()[3] + " <div class='popups-light'>szuka</div> " + childSnapshot.val()[2] + "</div>" + "<button onclick=\"console.log('zobacz więcej');\">Szczegóły</button>")).addTo(map);
                });
                // this.marker.remove()
            });

        });


// Pobieranie automatycznie lokalizacji użytkownika
        this.getLocationAutomatically()
    }

    getLocationAutomatically() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.map.flyTo({
                    center: [this.lng, this.lat],
                    speed: 1.3,
                    maxDuration: 10600 //zmienic do 10600 dla efektu animowania (1000 i mniej do wyłączenia animowania)
                })
            });
        } else {
            alert("Włącz geolokalizację w swojej przeglądarce")
        }
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {

        return (

            <div>
            </div>
        )
    }
}


export default ShowMap;



