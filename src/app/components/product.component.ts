import { Component } from '@angular/core';
import { Product } from '../product.module';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent{
    product: Product = {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
}