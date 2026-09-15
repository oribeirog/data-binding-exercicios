import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-exercicio1',
  styleUrls: ['./exercicio1.scss'],
  templateUrl: './exercicio1.html',
})
export class Exercicio1 {
  nome: string = '';
  idade: string = '';
  curso: string = '';
}
