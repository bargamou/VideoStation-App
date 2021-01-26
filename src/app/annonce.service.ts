import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Annonce } from './Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  uri = 'http://localhost:4000/advertiser';
  
  annonces: Annonce[];
  access: boolean;

  constructor(private http: HttpClient) { }

  addAnnonce(a: Annonce){ 
    console.log("ici" + a.username);
    this.http.post(`${this.uri}/add`, a)
        .subscribe(res => console.log('Done'));
  }
 
  
  deleteAnnonce(id){ 
    console.log(id);
    return this
            .http
            .delete(`${this.uri}/delete/${id}` );
  }

  editAnnonce(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updatePlaylist(content, id) {
      console.log('Service : ' + content)
      const obj = {
        content: content
      };
      return this
        .http
        .post(`${this.uri}/update/${id}`, obj);
  }  

  getAnnoncesByUser(user) {
    console.log('ici '+ user);
    return this.http.get(`${this.uri}/${user}`);
  }
  
  getAnnonces() {
    console.log('ici');
    return this.http.get(`${this.uri}/`);
  }

  getAccess(){

    return this.access;
  }

}
