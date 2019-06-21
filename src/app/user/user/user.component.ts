import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validator, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import {User} from '../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSaved = false;
  userForm: any;
  massage = null;
  constructor(private formbulider: FormBuilder, private userService: UserService) { }
  ngOnInit() {
    this.userForm = this.formbulider.group({
      UserName:['',[Validators.required]],
      Password:['',[Validators.required]],
      EmailId:['',[Validators.required]]
    })
    this.massage = null;
  }
  onFormSubmit() {
    this.dataSaved = false;
    const user = this.userForm.value;
    this.CreateUser(user);
  }
  CreateUser(user: User) {
      this.userService.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
        }
      );
  }
}
