import { Injectable } from '@angular/core';
import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {
  getMunicipioMedia(id: number): number {
      let uf: UF;
      let soma = 0;
      let quantidade = 0;
     for (let entrada of VALORES)
     {
      if(entrada.uf_id == id)
        {
         soma += entrada.valor;
        quantidade++;
       }
      }
     return soma/quantidade;
    }

getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

getoMunicipiosAtendidosDoEstado(uf_id: number): Dados[] {
  var munAtendidos: Dados[] = [];
  for(let mun of VALORES){
  if(mun.uf_id == uf_id) munAtendidos.push(mun);
    }
      return munAtendidos;
    }
}
