import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exer01',
  templateUrl: './exer01.component.html',
  styleUrls: ['./exer01.component.css']
})
export class Exer01Component implements OnInit {
  resultado: string = '';
  classificacao: string = '';
  massa: number = 0;
  altura: number = 0;
  exibeP: boolean = false
  temp: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.temp = parseFloat((this.massa / (this.altura * this.altura)).toFixed(2))
    this.resultado = this.temp.toString()

    if (this.temp < 16) {
      this.classificacao = 'Magreza Grave'
    } else if (this.temp < 17) {
      this.classificacao = 'Magreza Moderada'
    } else if (this.temp < 18.5) {
      this.classificacao = 'Magreza Leve'
    } else if (this.temp < 25) {
      this.classificacao = 'Saudável'
    } else if (this.temp < 30) {
      this.classificacao = 'Sobrepeso'
    } else if (this.temp < 35) {
      this.classificacao = 'Obesidade Grau I'
    } else if (this.temp < 40) {
      this.classificacao = 'Obesidade Grau II (Severa)'
    } else {
      this.classificacao = 'Obesidade Grau III (Mórbida)'
    }





    this.exibeP = true;
  }

  esconderParag() {
    this.exibeP = false;
  }

}
