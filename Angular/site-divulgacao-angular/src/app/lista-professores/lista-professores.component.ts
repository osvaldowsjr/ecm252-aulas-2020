import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-professores',
  templateUrl: './lista-professores.component.html',
  styleUrls: ['./lista-professores.component.css']
})
export class ListaProfessoresComponent {
  valor: number;
  gerarValor(){
    this.valor = Math.round(Math.random() *100)+1;
  }
  ehPar():Boolean{
    return this.valor % 2 ==0;
  }

  obterEstiloBotao(){
    return ['botao']
  }
}
