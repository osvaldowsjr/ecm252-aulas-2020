import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { PaginaProfessoresComponent } from './pagina-professores/pagina-professores.component';
import { PaginaFormsComponent } from './pagina-forms/pagina-forms.component';
import { FormsAlunosComponent } from './forms-alunos/forms-alunos.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

const routes: Routes = [
  { path: 'professores', component: PaginaProfessoresComponent },
  { path: 'forms', component: PaginaFormsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    ListaProfessoresComponent,
    CursoCadastroComponent,
    PaginaProfessoresComponent,
    PaginaFormsComponent,
    FormsAlunosComponent,
    ListaAlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
