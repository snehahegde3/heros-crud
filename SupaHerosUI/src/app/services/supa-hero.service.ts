import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SupaHero } from '../models/supaHero';

@Injectable({
  providedIn: 'root'
})
export class SupaHeroService {
  private url = "SupaHero";
  constructor(private http: HttpClient) { }

  public getSupaHeros(): Observable<SupaHero[]>{
    return this.http.get<SupaHero[]>(`${environment.apiUrl}/${this.url}`)
  }
}
