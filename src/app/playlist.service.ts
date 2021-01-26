import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from './Playlist';
import { Video } from './shared/models/search.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  uri = 'http://localhost:4000/playlist';
  
  playlists: Playlist[];
  access: boolean;

  constructor(private http: HttpClient) { }

  addPlaylist(p: Playlist){ 
    console.log(p);
    this.http.post(`${this.uri}/add`, p)
        .subscribe(res => console.log('Done'));
  }
 
  
  deletePlaylist(id){ 
    console.log(id);
    return this
            .http
            .delete(`${this.uri}/delete/${id}` );
  }

  editPlaylist(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updatePlaylist(name, id) {
      console.log('Service : ' + name)
      const obj = {
        name: name 
      };
      return this
        .http
        .post(`${this.uri}/update/${id}`, obj);
    }  

  getPlaylists(user) {
    console.log('ici '+ user);
    return this.http.get(`${this.uri}/${user}`);
  }

  getAccess(){

    return this.access;
  }

  addVideoToPlaylist(v, name){ 
    console.log('ici' + v);
    this.http.post(`${this.uri}/addVideo/${name}`, v)
        .subscribe(res => console.log('Done'));
  }

}
