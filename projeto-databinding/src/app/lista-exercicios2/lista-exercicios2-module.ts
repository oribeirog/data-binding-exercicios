import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios2RoutingModule } from './lista-exercicios2-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';

@NgModule({
  declarations: [Exercicio1, Exercicio2, Exercicio3],
  imports: [CommonModule, ListaExercicios2RoutingModule, FormsModule],
})
export class ListaExercicios2Module {}
