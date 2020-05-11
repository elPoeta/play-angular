import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  log(x) {
    console.log(x)
  }
}
