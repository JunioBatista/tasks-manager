import { Injectable } from '@angular/core';
import { Tarefa } from './'

//arquivo onde ficará informações de crud de tarefas, Criar, ler, atualizar, deletar tarefa.


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : []
  }

  cadastrar(tarefa: Tarefa):void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime(); 
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
