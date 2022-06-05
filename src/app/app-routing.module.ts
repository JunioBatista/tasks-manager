import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  //comando abaixo: se o path estiver vazio(só a url home), redirecionar para  '/tarefas/listar'
  {
    path:'',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  }, 
...TarefaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
