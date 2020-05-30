import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent{
  @Input() curso;

  obterEstilosParaTitulo(){
    return{
      color: 'red',
    }
  }

  obterEstilosParaTexto(){
    return{
      color:'blue',
    }
  }
}
