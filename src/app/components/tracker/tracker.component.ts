import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  infoWindow
  constructor() { }

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    console.log("mapProperties : ", mapProperties);
    console.log("this.map : ", this.map);
    // if ('geolocation' in navigator) {
    //   var currentLocation = navigator.geolocation.getCurrentPosition(function (position) {
    //     this.map.setCenter({
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     });
    //   });
    //   console.log("currentLocation : ",currentLocation);

    // }
    if ("geolocation" in navigator) {
      /* geolocation is available */
      console.log("available", navigator);
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("position : ", position);
        const mapProperties = {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          animation: google.maps.Animation.DROP,

          // content:
          // '<h1>Location pinned from HTML5 Geolocation!</h1>' +
          // '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
          // '<h2>Longitude: ' + position.coords.longitude + '</h2>'
          // this.infoWindow.setPosition(center),
            // infoWindow.setContent('Location found.');
            // infoWindow.open(map);
        };
      //   var marker = new google.maps.Marker({
      //     position: mapProperties.center,
      //     title:"Hello World!"
      // });
      // marker.setMap(this.map);
      // this.map.setCenter(mapProperties.center);

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      })
    } else {
      /* geolocation IS NOT available */
      console.log("NOT available");
    }
    if ("geocoding" in navigator) {
      console.log("available", navigator);
    } else {
      console.log("NOT available");
    }
  }

}
