import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  uri = 'http://localhost:4000/user';
  
  users: User[];
  access: boolean;

  constructor(private http: HttpClient) { }

  addUser(user: User){ 
    console.log(user);
    this.http.post(`${this.uri}/add`, user)
        .subscribe(res => console.log('Done'));
  
   /* console.log(user);
    return this.http.post("mongodb://localhost:27017/user/add", user, {
        headers: new HttpHeaders({
          'Content-type' : 'application/json'
        })
    });*/
  }
 
  deleteUser(user: User){ 
    console.log(user);
    this.http.delete(`${this.uri}/delete` )
          .subscribe(
          () => {
            console.log('la supprition est terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }
  ListUser(user: User){
    console.log(user);
  
  }

  getUsers() {
   
    return this.http.get(`${this.uri}/`);
  }

  getAccess(){

    return this.access;
  }

  login(userName, password){
    var access = false;
    this.getUsers().subscribe((data: User[]) => {
        
      for(var i = 0; i <= data.length - 1; i++){ 
          console.log((data[i].username === userName && data[i].password === password));
          if(data[i].username === userName && data[i].password === password){

              console.log("Login >> " + userName + ", " + password + " equals " + userName + ", " + password);
              access = true;
          }
        }
 
        console.log("ha ana");
        if(access){
          console.log("access = " + access);
          return true;
        }
        else return false;
      }); 

      return false;
  }
}
