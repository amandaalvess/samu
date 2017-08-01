import { Component, OnInit } from '@angular/core';
import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css'],
})
export class ResumoComponent implements OnInit {
    title = 'Resumo';
    ufs: UF[];
    dados_da_samu: Dados[];
    meuUf: UF;
    media: number;
    munAtendidos: Dados[] = [];
constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.meuUf = this.ufService.getById(24);
        this.munAtendidos = this.samuService.getoMunicipiosAtendidosDoEstado(this.meuUf.id)
        this.media = this.calculomedia();
    }
    calculomedia(): number {
    var total = 0;
    for(let mun of this.munAtendidos){
      total+=mun.valor;
    }
    return Math.round(total/this.munAtendidos.length);
}
}
