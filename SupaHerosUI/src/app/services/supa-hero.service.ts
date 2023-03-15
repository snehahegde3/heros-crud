import { Injectable } from '@angular/core';
import { SupaHero } from '../models/supaHero';

@Injectable({
  providedIn: 'root'
})
export class SupaHeroService {
  url = "SupaHero";
  constructor() { }

  public getSupaHeros(): SupaHero[]{ 
    let hero = new SupaHero(); 
    hero.id = 1;
    hero.name = "Spider Man"; 
    hero.firstName = "Peter"; 
    hero.lastName = "Parker";
    hero.place = "New York City"; 
    return [hero];
  }
}
