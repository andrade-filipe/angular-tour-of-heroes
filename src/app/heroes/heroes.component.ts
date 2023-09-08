import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero-service/hero.service';
import { MessageService } from '../services/message-service/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  /* Variables */
  heroes: Hero[] = [];

  // selectedHero?: Hero;

  /* Constructor and lifecycle */
  constructor(private heroService: HeroService) {}
  // private messageService: MessageService

  ngOnInit(): void {
    this.getHeroes();
  }

  /* Methods */
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
