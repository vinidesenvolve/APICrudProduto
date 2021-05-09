import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {v4 as uuid} from 'uuid';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: uuid(),
    name: '',
    price: null 
  }
  
  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/product']);
    });
      }

  navigateToProduct(): void {
    this.router.navigate(['/product']);
  }

}
