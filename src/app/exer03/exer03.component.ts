import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'exer03',
  templateUrl: './exer03.component.html',
  styleUrls: ['./exer03.component.css']
})
export class Exer03Component implements OnInit {
  resultado: string = '';
  num1: string = '';
  num2: string = '';
  conta: string = ''
  exibeP: boolean = false;
  tempNum1: number = 0
  tempNum2: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  calcular() {
    this.tempNum1 = parseFloat(this.num1)
    this.tempNum2 = parseFloat(this.num2)
    switch (this.conta) {
      case 'soma': this.resultado = (this.tempNum1 + this.tempNum2).toString(); break
      case 'sub': this.resultado = (this.tempNum1 - this.tempNum2).toString(); break
      case 'mult': this.resultado = (this.tempNum1 * this.tempNum2).toFixed(2).toString(); break
      case 'div': if (this.tempNum2 != 0) { this.resultado = (this.tempNum1 / this.tempNum2).toFixed(2).toString(); } else { this.resultado = 'Número 2 inválido' }; break
    }
    this.exibeP = true
  }

  limpar() {
    this.num1 = '';
    this.num2 = '';
    this.exibeP = false
  }
}
