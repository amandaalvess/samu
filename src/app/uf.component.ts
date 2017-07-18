import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './uf.component.html',
  styleUrls: ['./app.component.css']
})
export class DadosDaUFComponent implements OnInit {
    title = 'app';
    id = 11;
    uf: UF;
    anos: Dados[];
    dadossamu : Dados[];
    municipiosatendidos : Dados[] = [];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.dadossamu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorId(this.id);
        this.anos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
    }

}
