import { Component } from '@angular/core';
import { SellerAuthService } from '../services/seller-auth.service';
import { SellerAuthModel } from './seller-auth.model';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerAuthService) {}

  signUp(data: SellerAuthModel) {
    console.log(data);
    this.seller.signUp(data).subscribe((res) => console.log(res));
  }
}
