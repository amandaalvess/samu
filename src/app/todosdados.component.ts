import { Component, OnInit } from '@angular/core';
import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import {UFs} from './services/mock-ufs'

@Component({
selector: 'app-root',
templateUrl: './todosdados.component.html',
styleUrls: ['./app.component.css'],
})
export class TodosDadosComponent implements OnInit {
    title = 'todos os dados';
    munAtendidos: Dados[] = [];
    media: number;
    meuUf: UF;
    ufs : UF[];
    dados_da_samu : Dados[];

constructor(private ufService: UFService, private samuService: SamuService)
   { }

   ngOnInit(): void {
         this.ufs = this.ufService.getAll();
         this.meuUf = this.ufService.getById(24);
         this.media = this.calculomedia();
         this.munAtendidos = this.samuService.getoMunicipiosAtendidosDoEstado(this.meuUf.id);
     }

     calculomedia(): number {
        var total = 0;
        for(let mun of this.munAtendidos){
          total+=mun.valor;
        }
        return Math.round(total/this.munAtendidos.length);
   }
}
