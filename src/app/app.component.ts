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
    municipiosatendidos: Dados[] = [];
    media: number;
    UFs: UF[];
    dadossamu: Dados[];
    uf: UF;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

    ngOnInit(): void {
        this.UFs = this.ufService.getAll();
        this.uf = this.ufService.getPorId(11);
        this.municipiosatendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
        this.media = this.calculoMedia();
    }

    calculoMedia(): number {
      var quantidade = 0;
      var total = 0;
      for(let mun of this.municipiosatendidos){
        if(mun.uf_id == 11)
        {
          quantidade++;
          total += mun.valor;
        }
      }
      return Math.round(total/quantidade);
    }
}
