import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { UserLogin } from '../shared/models/user.model';
import { AuthService } from '../../shared-module/common-services/auth-service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;
  public showPassword: boolean = false;
  loginRequest!: UserLogin;
  Id!: string;
  isLoading: boolean = false;
  image:string = ''

  //Component Constructor
  constructor(
    private title: Title,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  //LifeCycle Events
  ngOnInit() {
    this.title.setTitle('User Login');
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')])
    });
    this.authService.removeToken();
  }

  //Function to submit user-login form
  submitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.loginForm.markAllAsTouched();
      if (this.loginForm.valid) {
        this.loginRequest = this.loginForm.value;
        this.userService.loginCandidate(this.loginRequest).subscribe({
          next: (res) => {
            //successful Login
            if (res.isSuccess) {
              //User Role
              if (res.response.userRole == 'Users') {
                this.toastr.success('User Logged In Successfully!', 'Success!',{
                  timeOut: 2000,
                });
                this.router.navigate(['user-dashboard']);
                this.authService.setToken(res.response.token,res.response.userId,res.response.userRole);
                this.isLoading = false;
                localStorage.setItem("name",res.response.fullName);
              }
              //Admin Role
              else if (res.response.userRole == 'Admin') {
                this.toastr.success('Admin Logged In Successfully!', 'Success!',{
                  timeOut: 2000,
                });
                this.router.navigate(['admin-dashboard']);
                this.authService.setToken(res.response.token,res.response.userId,res.response.userRole);
                this.isLoading = false;
              };
            }
            else if (res.isSuccess == false) {
              //Login failed
              this.isLoading = false;
              this.toastr.error('User Not Found!', 'Failure', {
                timeOut: 2000,
              });
              this.loginForm.reset();
            }
          }
        });
      }

    }, 2000);

  }

  //Function to toggle password visibility in password field
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  //Getter functions to get for-values from form-controls
  get Email(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
