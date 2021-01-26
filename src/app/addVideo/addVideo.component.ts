import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from '../Playlist';
import { PlaylistService } from '../playlist.service';
import { Video } from '../shared/models/search.interface';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-addVideo',
  templateUrl: './addVideo.component.html',
  styleUrls: ['./addVideo.component.scss']
})

export class AddVideoComponent implements OnInit {

  playlist: Playlist;
  selectedValue: string;
  video: Video;
  playlists: Playlist[];
  currentUser: String;

  constructor(private ps: PlaylistService, private vs: VideoService, private router: Router) {
    this.currentUser = localStorage.getItem('username');
    this.video = JSON.parse(localStorage.getItem('currentVideo'));
  }
  
  ngOnInit() {
    this.getPlaylists(this.currentUser);
  }

  selectedData(value) {
    this.selectedValue = value;
  }

  getPlaylists(currentUser): void {
    this.ps
    .getPlaylists(currentUser)
    .subscribe((data: Playlist[]) => {
    this.playlists = data;
    })
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['addVideo']);
  }

  addVideo(){
    console.log(this.selectedValue);
    console.log(this.video);
    this.ps.addVideoToPlaylist(this.video, this.selectedValue);
    this.vs.addVideo(this.video);  
    this.reloadComponent();
  }
  goToHome(){ 
    this.router.navigate(["home"]);
  }
  
}
