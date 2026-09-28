import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: false,
  styleUrl: './exercicio1.scss',
  templateUrl: './exercicio1.html',
})
export class Exercicio1 {
  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
