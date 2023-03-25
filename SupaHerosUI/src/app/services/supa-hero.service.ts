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

  public updateSupaHero(hero: SupaHero): Observable<SupaHero[]>{
    return this.http.put<SupaHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }

  public createSupaHero(hero: SupaHero): Observable<SupaHero[]>{
    return this.http.post<SupaHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }

  public deleteSupaHero(hero: SupaHero): Observable<SupaHero[]>{
    return this.http.delete<SupaHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`);
  }
}
