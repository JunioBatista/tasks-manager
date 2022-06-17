import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefasComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { TarefaConcluidaDirective, TarefaService } from './shared'; 

@NgModule({
  declarations: [ 
    ListarTarefasComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [ TarefaService ]
})
export class TarefasModule { }
