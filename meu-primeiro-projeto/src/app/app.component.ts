import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-biding></app-data-biding>
      <app-diretivas-estruturais></app-diretivas-estruturais> 

      <app-diretivas-atributos>
        <h1>Aulas de Diretivas Atributo</h1>
        <h3>Final da aula</h3>
      </app-diretivas-atributos>

      <app-diretivas-atributos>
        <h1>Vinicius Krupa</h1>
        <h3>Nay Torres</h3>
      </app-diretivas-atributos>

      <router-outlet></router-outlet>  -->

      <app-diretivas-atributos></app-diretivas-atributos>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void { }

}
