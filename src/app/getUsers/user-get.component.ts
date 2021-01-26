import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getUsers',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})

export class UserGetComponent implements OnInit {

  users: User[];

  constructor(private ds: UserService, private router: Router) { }

  ngOnInit() {
   this.getUsers();
  }

  goToAdmin(){ 
    this.router.navigate(["admin"]);
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['getUsers']);
  }

  getUsers(): void {
    this.ds
    .getUsers()
    .subscribe((data: User[]) => {
    this.users = data;
    })
  }

  deleteUser(id) {
    console.log(id);
    this.ds
    .deleteUser(id)
    .subscribe((data)=>{
      this.reloadComponent();
      console.log("success");
      
    });
  }
 
}
