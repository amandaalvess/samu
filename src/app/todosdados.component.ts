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
    id = 24;
    media: number;
    anos: Dados[];
    meuUf: UF;
    ufs : UF[];
    dados_da_samu : Dados[];

constructor(private ufService: UFService, private samuService: SamuService)
   { }

   ngOnInit(): void {
         this.ufs = this.ufService.getAll();
         this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
         this.meuUf = this.ufService.getById(this.id);
         this.media = this.samuService.getMunicipioMedia(this.id);
         this.anos = this.samuService.getoMunicipiosAtendidosDoEstado(this.meuUf.id);
     }
   }
