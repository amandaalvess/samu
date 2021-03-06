import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './todososdados.component.html',
  styleUrls: ['./app.component.css'],
})
export class TodosOsDadosComponent implements OnInit {
    media: number;
    municipiosatendidos: Dados[] = [];
    uf: UF;
    ufs : UF[];
    dadossamu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getPorId(11);
        this.municipiosatendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
        this.media = this.calculomedia();
    }

    calculomedia(): number {
        var total = 0;
        for(let mun of this.municipiosatendidos){
          total+=mun.valor;
        }
        return Math.round(total/this.municipiosatendidos.length);
  }
}
