import { Injectable } from '@angular/core';
import { heroList } from "../mock";
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroList(){
    return heroList;
  }
}
