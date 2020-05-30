import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { PaginaProfessoresComponent } from './pagina-professores/pagina-professores.component';
import { PaginaFormsComponent } from './pagina-forms/pagina-forms.component';

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
    PaginaFormsComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
