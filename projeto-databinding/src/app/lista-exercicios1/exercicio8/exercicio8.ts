import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  standalone: false,
  styleUrl: './exercicio8.scss',
  templateUrl: './exercicio8.html',
})
export class Exercicio8 {
  produto: string = '';
  preco: number = 0;
  quantidade: number = 0;

  get total(): number {
    return this.preco * this.quantidade;
  }
}
