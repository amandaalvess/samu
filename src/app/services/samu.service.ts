import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { UF } from '../types/uf';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getoMunicipiosAtendidosPorEstado(uf: UF): Dados[] {
    var total: Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == uf.id) total.push(mun);
    }
    return total;
  }
}
