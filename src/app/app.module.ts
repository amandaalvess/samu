import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { ResumoComponent } from './resumo.component';
import { DadosDaUFComponent } from './uf.component';
import { TodosOsDadosComponent } from './todososdados.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    DadosDaUFComponent,
    TodosOsDadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {
          path: 'resumo',
          component: ResumoComponent
        },
        {
          path: 'dadosuf',
          component: DadosDaUFComponent
        },
        {
          path: 'todososdados',
          component: TodosOsDadosComponent
        }
      ])
  ],
    providers: [UFService, SamuService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
