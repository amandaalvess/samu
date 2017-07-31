import { Injectable } from '@angular/core';
import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UFService } from './uf.service';
import { NomeDado } from '../types/todososdados'

@Injectable()
export class TodosMetodos {

constructor(private ufService: UFService) { }

  unirDados(): NomeDado[]{
    let dadosfinais:NomeDado[] = [];
    let i: number;
    i = 0;
    let todos : Dados[] = VALORES.sort((uf1, uf2) => {
      if (uf1.uf_id > uf2.uf_id) return 1;
      if (uf1.uf_id < uf2.uf_id) return -1;
      return 0;
    });

    todos.forEach((item) => {
      let dado : NomeDado = new NomeDado();
      dado.ano = item.ano;
      dado.valor = item.valor;
      dado.uf = this.ufService.getPorId(item.uf_id);
      dadosfinais.push(dado);
    });
    return dadosfinais;
  }
}
