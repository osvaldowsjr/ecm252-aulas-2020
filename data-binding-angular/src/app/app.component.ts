import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
 export class AppComponent {
  nome;
  exibirCaixa = false;
  alterarNome(nome) {
  console.log(nome.target.value);
  this.nome = nome.target.value;
  }
  adicionar(nomeInput) {
  console.log(nomeInput.value);
  this.nome = nomeInput.value;
  this.exibirCaixa = true;
  }
 }