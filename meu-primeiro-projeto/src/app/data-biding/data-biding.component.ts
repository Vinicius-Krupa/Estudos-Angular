import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Vinicius";
  public idade: number = 23;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/01/como-criar-site-400x250.jpg";
  public imgTitle: string = "Property Binding";

  public position: {x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
      
  }

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
