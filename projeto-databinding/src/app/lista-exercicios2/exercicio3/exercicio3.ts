import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  standalone: false,
  styleUrl: './exercicio3.scss',
  templateUrl: './exercicio3.html',
})
export class Exercicio3 {
  idade = 18;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
