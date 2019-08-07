import { Component } from '@angular/core';
// import { PusherService } from './pusher.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  // title = 'Pusher Liker';
  likes: any =  10;
  constructor() {
  }
  // ngOnInit() {
  //   this.pusherService.channel.bind('new-like', data => {
  //     this.likes = data.likes ;
  //   });
  // }
}
