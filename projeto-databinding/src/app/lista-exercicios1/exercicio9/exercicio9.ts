import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  styleUrl: './exercicio9.scss',
  templateUrl: './exercicio9.html',
})
export class Exercicio9 {
  produtos = [
    { nome: 'Banana', estoque: 0 },
    { nome: 'Laranja', estoque: 0 },
    { nome: 'Tomates', estoque: 0 }
  ];

  aumentarEstoque(produto: any): void {
    produto.estoque++;
  }

  diminuirEstoque(produto: any): void {
    if (produto.estoque > 0) {
      produto.estoque--;
    }
  }
}
