import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../shared/service/hero.service";

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {

  heroList;

  constructor(
    public heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroList = this.heroService.getHeroList();
  }

}
