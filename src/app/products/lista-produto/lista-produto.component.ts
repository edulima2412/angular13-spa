import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[] | undefined

  ngOnInit(): void {
    this.productService.obterProdutos()
      .subscribe(
        products => {
          this.products = products
        },
        err => console.log(err)
      )
  }

}
