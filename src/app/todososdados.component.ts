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
    title = 'Todos os dados';
    id = 11;
    media: number;
    anos: Dados[];
    uf: UF;
    ufs : UF[];
    dadossamu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dadossamu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorId(this.id);
        this.media = this.samuService.getMunicipioMedia(this.id);
        this.anos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
    }

}
