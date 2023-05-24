import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Vinicius Krupa", idade: 23 },
    { nome: "José", idade: 54 },
    { nome: "Isabel", idade: 25 }
  ];

  public nome: string = 'vinicius';

  constructor() { }

  ngOnInit(): void {
      
    setInterval( ()=>{
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
      
    }, 2000)

  }

  public onClick(): void {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList(): void {
    this.list.push({ nome: "Nay", idade: 31 });
  }

  public onClickEventList(event: number): void {
    this.list.splice(event, 1)
  }
}
