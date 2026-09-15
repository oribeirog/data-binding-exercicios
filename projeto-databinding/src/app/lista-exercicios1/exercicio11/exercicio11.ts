import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  styleUrl: './exercicio11.scss',
  templateUrl: './exercicio11.html',
})
export class Exercicio11 {
  produtos = [
    {
      nome: 'Monitor OLED',
      preco: 1200,
      quantidade: 1
    },
    {
      nome: 'Cadeira Ergonômica',
      preco: 700,
      quantidade: 1
    }
  ];

  carrinho: any[] = [];

  aumentar(produto: any): void {
    produto.quantidade++;
  }

  diminuir(produto: any): void {
    if (produto.quantidade > 1) {
      produto.quantidade--;
    }
  }

  adicionarAoCarrinho(produto: any): void {
    const produtoCarrinho = this.carrinho.find(
      item => item.nome === produto.nome
    );

    if (produtoCarrinho) {
      produtoCarrinho.quantidade += produto.quantidade;
    } else {
      this.carrinho.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: produto.quantidade
      });
    }
  }

  get totalCarrinho(): number {
    return this.carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  }

  get totalItensCarrinho(): number {
    return this.carrinho.reduce(
      (total, item) => total + item.quantidade,
      0
    );
  }
}
