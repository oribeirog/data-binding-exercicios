import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  styleUrl: './desafio-final.scss',
  templateUrl: './desafio-final.html',
})
export class DesafioFinal {
  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentarDisciplinas(): void {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas(): void {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(): void {
    this.mensagem =
      `Matrícula realizada com sucesso para ${this.nomeAluno}, ` +
      `com ${this.quantidadeDisciplinas} disciplina(s).`;
  }
}
