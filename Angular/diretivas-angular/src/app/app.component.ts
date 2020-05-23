import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 textoBotao = "Esconder";
 esconder = false;

 pessoas = [
  { nome: "José", idade: 18 },
  { nome: "Maria", idade: 22 }
  ];

  adicionar(nome, idade) {
    this.pessoas = [{ nome: nome, idade: idade }, ...this.pessoas];
   }
   
 alterarExibicao() {
 this.textoBotao = this.esconder ?  "Esconder" : "Exibir" ;
 this.esconder = !this.esconder;
 }
}