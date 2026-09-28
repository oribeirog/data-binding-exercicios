import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  styleUrl: './exercicio12.scss',
  templateUrl: './exercicio12.html',
})
export class Exercicio12 {
  nome: string = '';
  quantidade: number | null = null;

  mensagem: string = '';

  produtos: { nome: string; quantidade: number }[] = [];

  cadastrar(): void {
    if (this.nome.trim() === '' || this.quantidade === null || this.quantidade < 0) {
      this.mensagem = 'Não foi possível realizar o cadastro.';
      return;
    }

    this.produtos.push({
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = null;
    this.mensagem = '';
  }

  excluir(index: number): void {
    this.produtos.splice(index, 1);
  }
}
