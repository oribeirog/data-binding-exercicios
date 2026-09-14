import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

  {
    path : 'lista-exercicios1';
    loadChildren: () => import('./lista-exercicios1/exercicio1.module').then(m => m.Exercicio1Module)
  }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
