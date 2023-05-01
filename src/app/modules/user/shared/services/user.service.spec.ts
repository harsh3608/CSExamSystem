import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { CandidatesReturnResponse, ReturnResponse, User, UserAddReturnResponse, UserLogin } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let login: UserLogin = {
    email: 'harsh@test.com',
    password: 'Test@123'
  };
  let response: ReturnResponse = {
    statusCode: 0,
    isSuccess: true,
    response: {
      token: 'string',
      userId: 'string-90e3cdhkcrnu54-fg5',
      fullName: 'harsh patel',
      userRole: 'admin',
      email: 'harsh@test.com'
    },
    message: 'string',
    exceptionMessage: 'string'
  };
  let addRequest: User = {
    userName: 'string',
    email: 'harsh@TestBed.com',
    firstName: 'Harsh',
    lastName: 'Patel',
    countryCode: '',
    phoneNumber: '',
    mobileNumber: '9876543210',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    gender: 'string',
    password: 'string',
    isAdmin: true
  };
  let addResponse: UserAddReturnResponse ={
    statusCode: 0,
    isSuccess: true,
    response: '',
    message: '',
    exceptionMessage: ''
  };
  let users: CandidatesReturnResponse = {
    statusCode: 0,
  isSuccess: true,
  response: [],
  message: '',
  exceptionMessage: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have loginCandidate function', () => {
    service.loginCandidate(login).subscribe((res) => {
      expect(res).toEqual(response);
    });
  });

  it('should have registerUser function', () => {
    service.registerUser(addRequest).subscribe( (res)=>{
      expect(res).toEqual(addResponse);
    } );
  });

  it('should have getAllUsers function', () => {
    service.getAllUsers().subscribe( (res)=>{
      expect(res).toEqual(users);
    } );
  });

});
