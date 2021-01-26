import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { User } from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User={};
  confirmedPassword?: string;
  nameusr?: string;

  constructor(private us: UserService, private router: Router) {
    console.log(this.user);
   }
  ngOnInit() {
  }
  goToLoginIn(){ 
    
      this.router.navigate(["login"]);
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['addUser']);
  }

  addUser(){
    console.log(this.user);
    this.user.role = "User";
    if(this.user.password === this.confirmedPassword){
      this.us.addUser(this.user);
      this.reloadComponent();
    }
  }
  goToHome(){ 
    this.router.navigate(["home"]);
  }
 
  goToAdmin(){ 
    this.router.navigate(["admin"]);
  }
  
  SearchUser( ){
    if(this.user.username === this.nameusr){
      this.us.ListUser(this.user);
    }
  }
}
