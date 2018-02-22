import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isAdminLoggedIn: boolean = AdminService.isAdminLoggedIn();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    AdminService.logout();
    location.reload();
  }

}
