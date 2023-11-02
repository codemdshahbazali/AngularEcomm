import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellerAuthModel } from '../seller-auth/seller-auth.model';

@Injectable({
  providedIn: 'root',
})
export class SellerAuthService {
  constructor(private http: HttpClient) {}

  signUp(data: SellerAuthModel) {
    return this.http.post('http://localhost:3000/seller', data);
  }
}
