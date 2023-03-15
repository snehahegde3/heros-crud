import { Component, OnInit } from '@angular/core';
import { SupaHero } from './models/supaHero';
import { SupaHeroService } from './services/supa-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SupaHerosUI';
  heros : SupaHero[] = []; 

  constructor(private supaHeroService: SupaHeroService){}

  ngOnInit(){ 
    this.heros = this.supaHeroService.getSupaHeros();
    console.log(this.heros);
  }
}
