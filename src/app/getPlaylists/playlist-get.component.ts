import { Component, OnInit, ViewChild } from '@angular/core';
import {Playlist} from '../Playlist';
import { PlaylistService } from '../playlist.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../Annonce';

@Component({
  selector: 'app-getPlaylists',
  templateUrl: './playlist-get.component.html',
  styleUrls: ['./playlist-get.component.css']
})

export class PlaylistGetComponent implements OnInit {
   
  playlists: Playlist[];
  currentUser: String;
  annonces: Annonce[];
  
  constructor(private ds: PlaylistService,private as: AnnonceService, private router: Router) {
    this.currentUser = localStorage.getItem('username');
    console.log('afak' + this.currentUser);
 } 
  

  ngOnInit() {   
    this.getPlaylists(this.currentUser);
    this.getAnnonces();
  }

  goToHome(){ 
    this.router.navigate(["home"]);
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['getPlaylists']);
  }

  getAnnonces(): void{
    this.as
    .getAnnonces()
    .subscribe((data: Annonce[]) => {
      this.annonces = data;
    })
  }

  getPlaylists(currentUser): void {
    this.ds
    .getPlaylists(currentUser)
    .subscribe((data: Playlist[]) => {
    this.playlists = data;
    })
  }

  deletePlaylist(id) {
    console.log(id);
    this.ds
    .deletePlaylist(id)
    .subscribe((data)=>{
      this.reloadComponent();
      console.log("success");
      
    });
  }
 
}
