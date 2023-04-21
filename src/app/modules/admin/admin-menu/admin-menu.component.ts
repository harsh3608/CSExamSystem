import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared-module/common-services/auth-service/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Admin');
  }

  logOut() {
    this.authService.removeToken();
    this.router.navigate(['']);
  }
}
