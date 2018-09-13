// getting the latest data from firebase onloading
//         this.map.on('load', () => {
//
//             const preObject = document.getElementById('db');
//             const dbRefObject = firebase.database().ref().child('Nowy111');
//             dbRefObject.on('value', snap => {
//                 preObject.innerText = JSON.stringify(snap.val(), null, 1);
//                 console.log(snap.val());
//
//                 new mapboxgl.Marker(
//                     {
//                         color: '#7ad8ff'//'#ff1e29'
//                     }).setLngLat([snap.val()[0], snap.val()[1]]).addTo(this.map);
//
//
//                 this.popup = new mapboxgl.Popup({offset: popupOffsets, className: 'popupstyle'})
//                     .setLngLat([event.lngLat.lng, event.lngLat.lat])
//                     .setHTML("<h1>{[snap.val()[3]}</h1>")
//                     .addTo(this.map);
//             });
//         });



// this.geoFire.get("some_key").then(function(location) {
//     if (location === null) {
//         console.log("Provided key is not in GeoFire");
//     }
//     else {
//         console.log("Provided key has a location of " + location);
//     }
// }, function(error) {
//     console.log("Error: " + error);
// });


// var firebaseRef = firebase.database().ref();
// firebaseRef.child("Nowy111").set([event.lngLat.lng, event.lngLat.lat, this.state.userEvent]);


//marker popups

// this.popup = new mapboxgl.Popup({offset: popupOffsets, className: 'popupstyle'})
//     .setLngLat([event.lngLat.lng, event.lngLat.lat])
//     .setHTML(this.state.userEvent +
//         "<input type=\"text\" onkeypress=\"this.handleChangeEvent()\" placeholder=\"Wpisz czego szukasz\"/>" +
//         "<a href=\"#\" onclick=\"console.log('The link was clicked.'); return false\">\n" +
//         "  Click me\n" +
//         "</a>")
//     .addTo(this.map);



// // Generate a random Firebase location
// var firebaseRef = firebase.database().ref();
// console.log(firebaseRef);
//
// // Create a new GeoFire instance at the random Firebase location
// var geoFire = new GeoFire(firebaseRef);






// this.addEv = () => {
//     this.marker = new mapboxgl.Marker(
//         {draggable: true,
//         color: '#7ad8ff'}).setLngLat([this.lng, this.lat]).addTo(this.map)
//
//     console.log(this.marker.getLngLat());
//
// };
// this.delEv = () => {
//     this.marker.remove()
// };

import firebase from "firebase/index";
import React from "react";
import mapboxgl from "mapbox-gl";

-----------------
// this.geoFire.set("userPointCords", [event.lngLat.lng, event.lngLat.lat]).then(()=> {
//     console.log("Provided key has been added to GeoFire");
// }, function(error) {
//     console.log("Error: " + error);
// });
// // console.log(this.state.userEvent + 'po dblclick');

// this.geoFire.get("userPointCords").then((location)=> {
// }, function(error) {
//     console.log("Error: " + error);
// });

// console.log(this.state.userEvent + 'po load');


// //testing
//         map.on('click', function(e) {
//             var f = map.queryRenderedFeatures(e.point, {layers: ['point']});
//             if (f.length) {
//                 var feature = f[0];
//                 // Populate the popup and set its coordinates
//                 // based on the feature found.
//                 var popup = new mapboxgl.Popup()
//                     .setLngLat(feature.geometry.coordinates)
//                     .setHTML(ClickedGameObject(feature))
//                     .addTo(map);
//             }
//             ;
//         })
//
//             function ClickedGameObject(feature){
//                 var html = '';
//                 html += "<div>";
//                 html += "<h2>" + feature.properties.title + "</h2>";
//                 html += "<p>" + feature.properties.description + "</p>";
//                 html += "<button class='content' id='btn-collectobj' value='Collect'>Collect</button>";
//                 html += "</div>";
//                 return html;
//             }
// //testing

//         this.map.on('click', event =>{
//     const result = this.map.queryRenderedFeatures(event.point);
//
//         .addTo(this.map);
// });

// // Creating new DOM element
// var my_div = null;
// var newDiv = null;
//
// // tworzy nowy element div
// // i daje jego zawartość
// newDiv = document.createElement("div");
// newDiv.innerHTML = "<h1>Ten tekst został dodany do wirtualnego drzewa DOM</h1>";
//
// // add the newly created element and it's content into the DOM
// my_div = document.getElementById("db");
// document.body.insertBefore(newDiv, my_div);
//
// this.changeSmth = () => {
//     // var mainInput = document.getElementById('crdInput')
//     // var valueMainInput = mainInput.value;
//
//     var firebaseRef = firebase.database().ref();
//     firebaseRef.child("Współrzędnyyy2").set(this.lat);
// };



//
// var allEventsAccess = fire.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;
//
// if (allEventsAccess != null) {
//     name = allEventsAccess.displayName;
//     email = allEventsAccess.email;
//     photoUrl = allEventsAccess.photoURL;
//     emailVerified = allEventsAccess.emailVerified;
//     uid = allEventsAccess.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
// }


// this.firebaseGetRef = firebase.database().ref();
//
// var allEvents = {};
// var allEventsArray = [allEvents];
//
// this.firebaseGetRef.on('value', snapshot => {
//     snapshot.forEach(childSnapshot => {
//
//         allEvents.email = childSnapshot.val()[3];
//         allEvents.description = childSnapshot.val()[2];
//
//         // console.log(allEvents);
//         this.titi = allEvents
//     });
// });




// this.dbRef = firebase.database().ref()

// componentWillMount(){
//
//     this.dbRef.on('value', snap => {
//         console.log(snap.val());
//         console.log('firebaseHolyArray: ', Object.values(snap.val()));
//     });
// }

//  {/*<div className="searchable-container">*/}
      //  {/*<div className="items col-xs-12 col-sm-6 col-md-6 col-lg-6 clearfix">*/}
         //   {/*<div className="info-block block-info clearfix">*/}
              //  {/*<div className="square-box pull-left">*/}
                //    {/*<span className="glyphicon glyphicon-user glyphicon-lg"></span>*/}
               // {/*</div>*/}
               // {/*<h5>Company Name</h5>*/}
               // {/*<h4>Name: Tyreese Burn</h4>*/}
               // {/*<p>Title: Manager</p>*/}
               // {/*<span>Phone: 555-555-5555</span>*/}
              //  {/*<span>Email: sample@company.com</span>*/}
          //  {/*</div>*/}
       // {/*</div>*/}
//    {/*</div>*/}



//ponizej wykorzystane, ale wrzucam kopię dla podglądu na setHTML (umieszczony link)
    // this.map.on('load', () => {
    //
    //     this.firebaseGetRef.on('value', snapshot => {
    //         snapshot.forEach(childSnapshot => {
    //             this.marker = new mapboxgl.Marker(
    //                 {
    //                     color: '#7ad8ff'//'#ff1e29'
    //                     // }).setLngLat([18.612037584189693,54.38686535743409]).addTo(map);
    //                 }).setLngLat([childSnapshot.val()[0], childSnapshot.val()[1]])
    //                 .setPopup(new mapboxgl.Popup({offset: 25})
    //                     .setHTML("<div>" + childSnapshot.val()[3] + " szuka " + childSnapshot.val()[2] +
    //                         "<a href=\"#\" onclick=\"console.log('Link zostal klikniety'); return false\">" +
    //                         "Kliknij" +
    //                         "</a>" + "<button onclick=\"console.log('button powinien zostac usuniety');\">USUŃ</button>" + "</div>")).addTo(map);
    //         });
    //         // this.marker.remove()
    //     });
    //
    // });


// // Create a new GeoFire instance at the random Firebase location
//     // this.geoFire = new GeoFire(this.firebaseSetRef);
//
//
//     this.map.on('click', () => { //'click', (event)=>{(...)
//         // const result = this.map.queryRenderedFeatures(event)
//         // console.log(event.point);
//         // var user = fire.auth().currentUser;
//         // console.log(user.email);
//     });

// this.state = {
//     userEvent: 'to jest wartość początkowa State-u'
// };
// this.handleChangeEvent = this.handleChangeEvent.bind(this);
// }

// handleChangeEvent=()=>{
//     this.setState({
//         userEvent: 'probazmianystatu'
//
//     });
// };