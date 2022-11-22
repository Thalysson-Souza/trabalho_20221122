import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer02',
  templateUrl: './exer02.component.html',
  styleUrls: ['./exer02.component.css']
})
export class Exer02Component implements OnInit {
  itens: string[] = [];
  tarefa: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  inserir() {
    this.itens.push(this.tarefa)
  }

  remover(index: number) {
    this.itens.splice(index, 1)
    alert(this.itens)
  }

  changeItem(i: number) {
    // if (i && i != null) {
    //   document.getElementById(`${i}`).style.color = "green";
    // }
  }

}
