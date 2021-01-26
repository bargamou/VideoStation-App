import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from '../Playlist';
import { PlaylistService } from '../playlist.service';


@Component({
  selector: 'app-createPlaylist',
  templateUrl: './createPlaylist.component.html',
  styleUrls: ['./createPlaylist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  playlist: Playlist={};
  currentUser: string;

  constructor(private ps: PlaylistService, private router: Router) {
    this.currentUser = localStorage.getItem('username');
   }

    ngOnInit() {
    }

  goToLoginIn(){ 
    
      this.router.navigate(["login"]);
  }

  goToHome(){ 
    this.router.navigate(["home"]);
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['createPlaylist']);
  }

  addPlaylist(){
      this.playlist.username = this.currentUser;
      console.log(this.playlist);
      this.ps.addPlaylist(this.playlist);
      this.reloadComponent();
    }
}
