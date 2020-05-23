import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
 export class AppComponent {
  nome;
  exibirCaixa = false;
  numero;
  produto;
  gerarNumero() {
  this.numero = Math.floor(Math.random() * 6) + 1;
  }
  alterarNome(nome) {
  console.log(nome.target.value);
  this.nome = nome.target.value;
  }
  adicionar(nomeInput) {
    this.nome = nomeInput.value;
    this.exibirCaixa = true;
    }
    alterarProduto(produtoInput) {
      this.produto = 'Novo produto: ' + produtoInput.value;
      }
     
   }
   