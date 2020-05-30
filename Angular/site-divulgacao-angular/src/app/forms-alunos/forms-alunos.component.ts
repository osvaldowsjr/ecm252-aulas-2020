import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-forms-alunos',
  templateUrl: './forms-alunos.component.html',
  styleUrls: ['./forms-alunos.component.css']
})

export class FormsAlunosComponent {
  @Output() pessoaRegistrada = new EventEmitter();
  salvar(pessoaForm) {
    const pessoa ={
      nome:pessoaForm.value.nome,
      email:pessoaForm.value.email,
      curso:pessoaForm.value.curso,
    }    
    console.log(pessoa)
    this.pessoaRegistrada.emit(pessoa)
    }
    cursos = ['Computação','Controle e automação','Alimentos','Produção','Elétrica','Eletrônica','Civil','Mecânica','Química'];
   
    obterClasseTitulo(){
      return ['titulo']
    }

}
