import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { ResumoComponent } from './resumo.component';
import { DadosUFComponent } from './uf.component';
import { TodosDadosComponent } from './todosdados.component';
@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    DadosUFComponent,
    TodosDadosComponent
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
        component: DadosUFComponent
          },
          {
         path: 'todosdados',
        component: TodosDadosComponent
        }
            ])
   ],
  providers: [ UFService, SamuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
