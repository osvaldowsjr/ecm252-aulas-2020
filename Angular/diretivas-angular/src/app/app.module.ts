import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoaCartaoComponent } from './pessoa-cartao/pessoa-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaCartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
