import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: false,
  styleUrl: './exercicio4.scss',
  templateUrl: './exercicio4.html',
})
export class Exercicio4 {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 3;

  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
