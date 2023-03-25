import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SupaHero } from 'src/app/models/supaHero';
import { SupaHeroService } from 'src/app/services/supa-hero.service';
@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: SupaHero;
  @Output() herosUpdated = new EventEmitter<SupaHero[]>();

  constructor(private supaHeroService: SupaHeroService) { }

  ngOnInit(): void { }

  updateHero(hero: SupaHero) {
    this.supaHeroService.updateSupaHero(hero).subscribe((heros: SupaHero[]) => this.herosUpdated.emit(heros));
  }

  deleteHero(hero: SupaHero) {
    this.supaHeroService.deleteSupaHero(hero).subscribe((heros: SupaHero[]) => this.herosUpdated.emit(heros));
  }

  createHero(hero: SupaHero) {
    this.supaHeroService.createSupaHero(hero).subscribe((heros: SupaHero[]) => this.herosUpdated.emit(heros));
  }
}
