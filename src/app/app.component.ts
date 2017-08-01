import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title: string = "";
    ufs : UF[];
    id = 24;
    munAtendidos: Dados[] = [];
    meuUf: UF;
    dados_da_samu : Dados[];
    media: number = 0;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

  ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.meuUf = this.ufService.getById(24);
        this.munAtendidos = this.samuService.getoMunicipiosAtendidosDoEstado(this.meuUf.id);
        this.media = this.calculomedia();
        this.title = this.defineTitle();
   }

  defineTitle(): string{
              for(let meuUf of this.ufs){
                if(meuUf.id == 24) return meuUf.nome;
              }
       }
   calculomedia(): number {
     var total = 0;
      for(let mun of this.munAtendidos){
        total+=mun.valor;
      }
      return Math.round(total/this.munAtendidos.length);
   }
}
