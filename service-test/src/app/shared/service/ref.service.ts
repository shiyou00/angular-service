import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefService {
  numChange: EventEmitter<number>;

  constructor() {
    this.numChange = new EventEmitter();
  }

  multSer(a,b){
    return a * b;
  }

  addSer(a,b){
    return a + b;
  }

  subSer(a,b){
    return a - b;
  }
}
