import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  standalone: false,
  styleUrl: './exercicio7.scss',
  templateUrl: './exercicio7.html',
})
export class Exercicio7 {
  disciplinas = [
    'Projeto Integrador IV',
    'Arquitetura e Administração de Banco de Dados',
    'Padrões de Desenvolvimento Web',
    'Fundamentos de Redes e Segurança',
    'Códigos de Alta Performace',
    'Sistemas Operacionais'
  ];
}
