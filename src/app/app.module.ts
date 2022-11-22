import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';
import '@angular/common/locales/global/pt';
import { LivrosComponent } from './livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { Route, RouterModule } from '@angular/router';
import { Exer01Component } from './exer01/exer01.component';
import { Exer03Component } from './exer03/exer03.component';
import { Exer02Component } from './exer02/exer02.component';

const routes: Route[] = [
  { path: 'listagem', component: LivrosComponent },
  { path: 'cadastro', component: LivrosCadastroComponent },
  { path: 'edicao/:id', component: LivrosCadastroComponent },
  { path: 'exer01', component: Exer01Component },
  { path: 'exer02', component: Exer02Component },
  { path: 'exer03', component: Exer03Component }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataHoraComponent,
    LivrosComponent,
    LivrosCadastroComponent,
    Exer01Component,
    Exer03Component,
    Exer02Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
