import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  standalone: false,
  styleUrl: './exercicio2.scss',
  templateUrl: './exercicio2.html',
})
export class Exercicio2 {
  usuarioLogado = false;

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
