import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  styleUrl: './exercicio6.scss',
  templateUrl: './exercicio6.html',
})
export class Exercicio6 {
  listaInicial = [
    'Guilherme',
    'Lucas',
    'Luiz',
    'Muniz',
    'Otavio'
  ];

  nomes = [...this.listaInicial];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}
