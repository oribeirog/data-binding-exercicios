import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  precoOriginal: number;
  quantidade: number;
  promocao: boolean;
}


@Component({
  selector: 'app-exercicio10',
  standalone: false,
  styleUrl: './exercicio10.scss',
  templateUrl: './exercicio10.html',
})
export class Exercicio10 {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      precoOriginal: 120,
      quantidade: 5,
      promocao: true
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      precoOriginal: 80,
      quantidade: 10,
      promocao: false
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 850,
      precoOriginal: 850,
      quantidade: 3,
      promocao: true
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 150,
      precoOriginal: 150,
      quantidade: 7,
      promocao: false
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 200,
      precoOriginal: 200,
      quantidade: 0,
      promocao: false
    }
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;

    if (produto.promocao) {
      produto.preco = produto.precoOriginal * 0.90;
    } else {
      produto.preco = produto.precoOriginal;
    }
  }
}
