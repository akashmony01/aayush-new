import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { AuthenticationService } from '@app/_guards/authentication.service';
import { Constants } from '@app/common/constants';
import { Product } from '@app/models/Product';
 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart: Product[] = [];

 cartItemCount = new BehaviorSubject(0);
  userdata: any;
  auth_token: string;
  
 
  constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
    this.userdata= JSON.parse(localStorage.getItem('user-access'));
    var str1 = new String( "Bearer " ); 
    var str2 = this.userdata.jwtToken;
    this.auth_token = str1.concat(str2.toString());

  }

  getCartData(postBody){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_GET_CART}`,postBody,{ headers: headers });
  }


  generateCart(postBody){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_GENERATE_CART}`,postBody,{ headers: headers });
  }

 addCartItems(postBody){ 
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.auth_token
  })
  return this.http.post(`${Constants.API_ADD_CARTITEMS}`,postBody,{ headers: headers });

  }
  
  editCart(postBody){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_EDIT_CART}`,postBody,{ headers: headers });

  }

  editCartItems(postBody){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
    return this.http.post(`${Constants.API_EDIT_CARTITEMS}`,postBody,{ headers: headers });

  }

  
 
  getCart() {
  
    return this.cart;
    
  }

  emptyCart(){
    return this.cart = [] ;
  }
 
  getCartItemCount() {
       return this.cartItemCount;
  }

  emptyCartItemCount(){
    this.cartItemCount = new BehaviorSubject(0);
  }
 
  addProduct(product) {
    
        let added = false;
    for (let p of this.cart) {
            if (p.productId === product.productId) {
              p.amount += 1;
               added = true;
                       break;
      }
    }
    if (!added) 
        {
          if(product.amount != null){
            product.amount = product.amount
          } else {
            product.amount = 1;
          }
          
          this.cart.push(product);
     
        }

    if(product.cartItemId != null)
     {
      this.cartItemCount.next(this.cartItemCount.value + product.amount);
      
     } else {
      this.cartItemCount.next(this.cartItemCount.value + 1);
     }
  }

  increaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.productId === product.productId) {
        p.amount += 1;
      }
    }
    
    this.cartItemCount.next(this.cartItemCount.value + 1);
   
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.productId === product.productId) {
        p.amount -= 1;
          if (p.amount == 0) {
                    if(p.cartItemId != null){
                      
                        const editCartItem ={
                              cartItemId :p.cartItemId,
                              quantity : 0,
                              isActive: false

                            }
                        this.editCartItems(editCartItem).subscribe( async data => {
                              const postData = data ;
                            
                              })           

                      }  
              this.cart.splice(index, 1);
            }
      }
    }
    
    this.cartItemCount.next(this.cartItemCount.value - 1);
   
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.productId === product.productId) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
