import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  styleUrl: './exercicio10.scss',
  templateUrl: './exercicio10.html',
})
export class Exercicio10 {
  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  entrar(): void {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }
}
