import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/product'

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}