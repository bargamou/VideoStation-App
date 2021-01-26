import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user';
  
  users: User[];
  access: boolean;
  public currentUser: User;
  
  constructor(private http: HttpClient) {
  
  }

  public get currentUserValue(){
    return this.currentUser;
  } 



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
 
  
  deleteUser(id){ 
    console.log(id);
    return this
            .http
            .delete(`${this.uri}/delete/${id}` );
  }

  editUser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateUser(username, password, nom, prenom, email, id) {
      console.log('Service : ' + username)
      const obj = {
        username: username,
        password: password,
        nom: nom,
        prenom: prenom,
        email: email,
        role: 'User'  
      };
      return this
        .http
        .post(`${this.uri}/update/${id}`, obj);
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
              this.currentUser = data[i];
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
