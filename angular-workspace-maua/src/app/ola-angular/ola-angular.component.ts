import { Component } from "@angular/core";

@Component({
    selector: "ola-angular",
    template: `
    <p>Olá, {{framework}}</p>
    `
   })
   export class OlaAngularComponent {
    framework = "Angular";
   }