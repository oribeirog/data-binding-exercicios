import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  styleUrl: './exercicio14.scss',
  templateUrl: './exercicio14.html',
})
export class Exercicio14 {
  nomes: string[] = [
    'Guilherme',
    'Lucas',
    'Luiz',
    'Muniz',
    'Otavio'
  ];

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      quantidade: 0
    },
    {
      id: 4,
      nome: 'Headset',
      quantidade: 7
    },
    {
      id: 5,
      nome: 'Webcam',
      quantidade: 0
    }
  ];

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar documentação',
      responsavel: 'Lucas',
      concluida: true
    },
    {
      id: 2,
      titulo: 'Testar sistema',
      responsavel: 'Guilherme',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Corrigir erros',
      responsavel: 'Gabriel',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Atualizar cadastro',
      responsavel: 'Otávio',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Fazer relatório',
      responsavel: 'Luiz',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Revisar projeto',
      responsavel: 'Lucas',
      concluida: false
    }
  ];
}
