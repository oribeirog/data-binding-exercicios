import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: string;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  styleUrl: './desafio-final.scss',
  templateUrl: './desafio-final.html',
})
export class DesafioFinal {
  mostrarConcluidos: boolean = true;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe A',
      nota: 8,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Eventos',
      equipe: 'Equipe B',
      nota: 7,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Sistema de Vendas',
      equipe: 'Equipe C',
      nota: 5,
      status: 'testes',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Site Institucional',
      equipe: 'Equipe D',
      nota: null,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 5,
      titulo: 'Sistema Acadêmico',
      equipe: 'Equipe E',
      nota: 9,
      status: 'concluído',
      entregue: true
    }
  ];

  alterarStatus(projeto: Projeto): void {
    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';
    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';
    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';
    } else {
      projeto.status = 'planejamento';
    }
  }

  projetosConcluidos(): number {
    return this.projetos.filter(projeto => projeto.status === 'concluído').length;
  }
}
