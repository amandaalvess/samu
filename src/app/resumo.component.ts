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
    id = 24;
    ufs: UF[];
    meuUf: UF;
    media: number;
    munAtendidos: Dados[] = [];
constructor(private ufService: UFService, private samuService: SamuService)
    { }
    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.meuUf = this.ufService.getById(this.id);
        this.media = this.samuService.getMunicipioMedia(this.id);
    }
}
