import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  styleUrl: './exercicio13.scss',
  templateUrl: './exercicio13.html',
})
export class Exercicio13 {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar documentação',
      responsavel: 'Lucas',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 2,
      titulo: 'Testar sistema',
      responsavel: 'Guilherme',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Corrigir erros',
      responsavel: 'Muniz',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Atualizar cadastro',
      responsavel: 'Otávio',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Fazer relatório',
      responsavel: 'Emerson',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Revisar projeto',
      responsavel: 'Luiz',
      prioridade: 'baixa',
      concluida: false
    }
  ];

  alterarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  tarefasConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  tarefasPendentes(): number {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}
