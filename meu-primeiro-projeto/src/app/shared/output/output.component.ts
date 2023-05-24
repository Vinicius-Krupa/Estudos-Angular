import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Vinicius Krupa", idade: 23 },
    { nome: "Nay", idade: 31 },
    { nome: "José", idade: 58 }
  ]

  constructor() { }

  ngOnInit(): void {
      
  }

  public getDados(event: number): void {
    this.enviarDados.emit(this.list[event]);
  }
}
