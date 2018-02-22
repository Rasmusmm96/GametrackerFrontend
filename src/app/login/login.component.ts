import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private adminService: AdminService, private location: Location) { }

  ngOnInit() {
  }

  login() {
    this.adminService.login(this.username, this.password).subscribe(res => {
      this.location.back();
    });
  }

}
