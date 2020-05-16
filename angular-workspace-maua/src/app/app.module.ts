import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OlaAngularComponent } from './ola-angular/ola-angular.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
