import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
    this.router.navigate(['user']);
  }
  addUser(){
    console.log(this.user);
    this.user.role = 'User';
    if(this.user.password === this.confirmedPassword){
      this.us.addUser(this.user);
      this.reloadComponent();
    }
  }
  SearchUser( ){
    if(this.user.username === this.nameusr){
      this.us.ListUser(this.user);
    }
  }
}
