import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
<<<<<<< HEAD
  getById(id: number): UF {
        for(let meuUf of UFs){
              if(meuUf.id == id) return meuUf;
            }
    }
  }
=======

  getPorId(id: number){
    for(let uf of UFs){
      if(uf.id == id) return uf;
    }
  }
}
>>>>>>> c2fe9c1aef787a216013df7c51b4c256fb29c36f
