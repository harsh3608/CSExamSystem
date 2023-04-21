import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../../shared-module/common-services/auth-service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addUserForm!: FormGroup;
  public showPassword: boolean = false;
  genderOptions = ['Male', 'Female'];
  addUserRequest!: User;

  date: any;
  name!:string;

  //Component Constructor
  constructor(
    private authService: AuthService,
    private title: Title,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  //LifeCycle Events
  ngOnInit() {

    // this.date = Number(new Date);
    // console.log(this.date);

    this.title.setTitle('User Registration');
    this.addUserForm = new FormGroup({
      id: new FormControl(''),
      userName: new FormControl('', []),
      isAdmin: new FormControl(false,[]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$")]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
      countryCode: new FormControl('', ),
      phoneNumber: new FormControl('', ),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]*.{10,10}")]),
      address1: new FormControl('', ),
      address2: new FormControl('', ),
      city: new FormControl('',),
      state: new FormControl('', ),
      country: new FormControl('', ),
      postalCode: new FormControl('',),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')
      ]),
      repeatPassword: new FormControl('', [Validators.required])
    }, { validators: this.checkPasswords })
  }


  getUserName(arg: any) {
    this.name = arg.target.value +'_'+Number(new Date);
    this.userName.setValue(this.name);
    console.log(this.name);
  }


  //Fuction for Submitting registration form
  submitAddForm() {
    this.addUserForm.markAllAsTouched();
    if (this.addUserForm.valid) {
      this.addUserRequest = this.addUserForm.value;
      this.userService.registerUser(this.addUserRequest).subscribe({
        next: (res)=>{
          if(res.isSuccess){
            this.toastr.success('User Added Successfully!', 'Success!',{
              timeOut: 2000,
            });
            this.router.navigate(['/admin-menu']);
          }else{
            this.toastr.error('User Not Added!', 'Failure', {
              timeOut: 2000,
            });
          }
        }
      })
    }
  }

  //Validator Function to check password match in password and confirm-password fields
  checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let pass = control.get('password')?.value
    let confirmPass = control.get('repeatPassword')?.value
    return pass == confirmPass ? null : { notSame: true }
  }

  //Function to toggle password visibility in password fields
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  logOut() {
    this.authService.removeToken();
    this.router.navigate(['']);
  }

  //Getter functions to get the form values from form-controls
  get userName(): FormControl {
    return this.addUserForm.get("userName") as FormControl;
  }
  get email(): FormControl {
    return this.addUserForm.get("email") as FormControl;
  }
  get firstName(): FormControl {
    return this.addUserForm.get("firstName") as FormControl;
  }
  get lastName(): FormControl {
    return this.addUserForm.get("lastName") as FormControl;
  }
  // get countryCode(): FormControl {
  //   return this.addUserForm.get("countryCode") as FormControl;
  // }
  // get phoneNumber(): FormControl {
  //   return this.addUserForm.get("phoneNumber") as FormControl;
  // }
  get mobileNumber(): FormControl {
    return this.addUserForm.get("mobileNumber") as FormControl;
  }
  // get address1(): FormControl {
  //   return this.addUserForm.get("address1") as FormControl;
  // }
  // get address2(): FormControl {
  //   return this.addUserForm.get("address2") as FormControl;
  // }
  // get city(): FormControl {
  //   return this.addUserForm.get("city") as FormControl;
  // }
  // get state(): FormControl {
  //   return this.addUserForm.get("state") as FormControl;
  // }
  // get country(): FormControl {
  //   return this.addUserForm.get("country") as FormControl;
  // }
  // get postalCode(): FormControl {
  //   return this.addUserForm.get("postalCode") as FormControl;
  // }
  get gender(): FormControl {
    return this.addUserForm.get("gender") as FormControl;
  }
  get password(): FormControl {
    return this.addUserForm.get("password") as FormControl;
  }
  get repeatPassword(): FormControl {
    return this.addUserForm.get("repeatPassword") as FormControl;
  }
  // get isAdmin(): FormControl {
  //   return this.addUserForm.get("isAdmin") as FormControl;
  // }

}
