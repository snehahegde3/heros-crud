import { Component, Input, OnInit } from '@angular/core';
import { SupaHero } from 'src/app/models/supaHero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit{

  @Input() hero?: SupaHero;

  constructor(){}
  
  ngOnInit(): void {
      
  }
}
