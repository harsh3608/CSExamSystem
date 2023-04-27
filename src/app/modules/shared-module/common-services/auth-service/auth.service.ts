import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AES } from 'crypto-js';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  secretKey: string = 'converge-solutions-2023';
  jwtHelperService = new JwtHelperService();

  constructor( ) { }

  setToken(token: string,userId: string,role: string) {
    const eToken = AES.encrypt(token, this.secretKey).toString();
    //console.log(eToken);
    //const dToken = AES.decrypt(eToken, this.secretKey).toString(CryptoJS.enc.Utf8);
    //console.log(dToken);
    const eId = AES.encrypt(userId, this.secretKey).toString();
    //console.log(eId);
    //const dId = AES.decrypt(eId, this.secretKey).toString(CryptoJS.enc.Utf8);
    //console.log(dId);
    //console.log(userId);

    localStorage.setItem("access_token", eToken);
    localStorage.setItem("user-id",eId);
    localStorage.setItem("user-role",role);
  }

  getToken() {
    const val = localStorage.getItem('access_token') || ''
    const dToken = AES.decrypt(val, this.secretKey).toString(CryptoJS.enc.Utf8);
    //console.log(dToken);
    return dToken;
  }

  getUserRole() {
    return localStorage.getItem('user-role');
  }

  getUserId() {
    const val = localStorage.getItem('user-id') || '';
    const dId = AES.decrypt(val, this.secretKey).toString(CryptoJS.enc.Utf8);
    return dId;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("access_token") ? true : false
  }

  removeToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user-id");
    localStorage.clear();
  }

  isRequestAuthorized() {
    const token = this.getToken();
    const expirytime = this.jwtHelperService.getTokenExpirationDate(token) || '';
    if(expirytime > new Date){
      return true;
    }
    return false
  }

}
