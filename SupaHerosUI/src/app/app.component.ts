import { Component, OnInit } from '@angular/core';
import { SupaHero } from './models/supaHero';
import { SupaHeroService } from './services/supa-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SupaHerosUI';
  heros: SupaHero[] = [];
  heroToEdit?: SupaHero;

  constructor(private supaHeroService: SupaHeroService) { }

  ngOnInit() {
    this.supaHeroService.getSupaHeros().subscribe((result: SupaHero[]) => {
      this.heros = result;
    });
  }

  updateHeroList(heros: SupaHero[]) {
    this.heros = heros;
  }

  initNewHero() {
    this.heroToEdit = new SupaHero();
  }
  editHero(hero: SupaHero) {
    this.heroToEdit = hero;
  }
}
