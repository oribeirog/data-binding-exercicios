import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}


@Component({
  selector: 'app-exercicio11',
  standalone: false,
  styleUrl: './exercicio11.scss',
  templateUrl: './exercicio11.html',
})
export class Exercicio11 {
  somenteDisponiveis = false;

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 850,
      quantidade: 0
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 150,
      quantidade: 7
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 200,
      quantidade: 0
    }
  ];

  alternarFiltro() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}
