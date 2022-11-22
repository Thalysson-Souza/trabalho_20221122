import { Component, OnInit } from '@angular/core';
import { Item } from './exer02.interface';

@Component({
  selector: 'app-exer02',
  templateUrl: './exer02.component.html',
  styleUrls: ['./exer02.component.css']
})
export class Exer02Component implements OnInit {

  itens: Item[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  inserir(description: string) {
    if (description.trim() != '') {
      this.itens.push({
        description: description.trim(),
        done: false
      });
    }
  }

  remover(index: number) {
    this.itens.splice(index, 1)
  }

  change(index: number) {
    this.itens[index].done = !this.itens[index].done;
  }

}
