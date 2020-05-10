import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: "Leonardo",
        lastName: "Tosetto",
        email: "leonardo.a.tosetto@gmail.com",
        password: "@elpoeta"
      },
      {
        firstName: "Gilda",
        lastName: "Michelle",
        email: "gi@gmail.com",
        password: "gilda"
      }
    ]
  }

}
