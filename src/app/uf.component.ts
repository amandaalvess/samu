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
export class DadosUFComponent implements OnInit {
    title = 'app';
    id = 24;
    meuUf: UF;
    anos: Dados[];
    dados_da_samu : Dados[];
    munAtendidos : Dados[] = [];

constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.meuUf = this.ufService.getById(this.id);
        this.anos = this.samuService.getoMunicipiosAtendidosDoEstado(this.meuUf.id);
        }
      }
