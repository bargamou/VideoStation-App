import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editUser',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ds: UserService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        username: ['', Validators.required ],
        password: ['', Validators.required ],
        nom: ['', Validators.required ],
        prenom: ['', Validators.required ],
        email: ['', Validators.required ]
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ds.editUser(params['id']).subscribe(res => {
          this.user = res;
      });
    });
  }

  updateUser(username, password, nom, prenom, email, id) {
    console.log("component : " + username);
    this.route.params.subscribe(params => {
      this.ds.updateUser(username, password, nom, prenom, email, params['id']).subscribe((data: string) =>{
        console.log(data);
        this.router.navigate(['getUsers']);
    });
  })
}
}