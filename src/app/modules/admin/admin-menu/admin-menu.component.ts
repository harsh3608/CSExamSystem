import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared-module/common-services/auth-service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    //this.title.setTitle('Admin');
  }

  logOut() {
    var val = confirm("Are you sure to Log Out ?");
    if(val) {
      this.authService.removeToken();
      this.router.navigate(['']);
      this.toastr.warning('Pease, Login to continue !', 'Logged Out', {
        timeOut: 2000,
      });
    }

  }
}
