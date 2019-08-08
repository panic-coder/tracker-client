import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  private url = 'http://localhost:3000'; //Backend server url
  private socket;
  constructor() { 
    this.socket = io(this.url);
    this.socket.on('location', function (location) {
      console.log(location);
    });
  }
  public sendLocation(location) {
    this.socket.emit('new-location', {
      // user_id: localStorage.getItem('user_id'),
      location: location
    });
  }
}
