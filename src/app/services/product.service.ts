import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '@app/models/Product';
import {AuthenticationService} from '../_guards/authentication.service';
import { Constants } from '../common/constants';
import { ProductCategory } from '@app/models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  userdata: any;
  auth_token: string;
  httpHeader: HttpHeaders;

  constructor(private http: HttpClient,
              public authenticationService: AuthenticationService) {
    this.userdata= JSON.parse(localStorage.getItem('user-access'));
    let str1 = String( "Bearer " );
    let str2 = this.userdata.jwtToken;
    this.auth_token = str1.concat(str2.toString());
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth_token
    })
  }

  getProducts(id) {
    return this.http.get<ProductCategory[]>(`${Constants.API_CATEGORY_ALL}/${id}`,
      { headers: this.httpHeader });
  }

  addCategory(category: ProductCategory) {
    return this.http.post<ProductCategory>(`${Constants.API_PRODUCT_CATEGORY_ADD}`,
      category, { headers: this.httpHeader });
  }

  updateCategory(category: ProductCategory) {
    return this.http.put<ProductCategory>(`${Constants.API_CATEGORY}/${category.productCategoryId}`,
      category, { headers: this.httpHeader });
  }

  addProduct(product: Product) {
    return this.http.post<Product>(`${Constants.API_PRODUCT_ADD}`, product, { headers: this.httpHeader });
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${Constants.API_PRODUCT}/${product.productId}`, product, { headers: this.httpHeader });
  }

  deleteProduct(product: Product) {
    return this.http.delete(`${Constants.API_PRODUCT}/${product.productId}`, { headers: this.httpHeader });
  }

}




