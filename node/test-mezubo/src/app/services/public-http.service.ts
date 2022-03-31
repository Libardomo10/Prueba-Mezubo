import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicHttpService {
  END_POINT: any;
  constructor(private http: HttpClient) {
    this.END_POINT = environment.END_POINT_LOCAL;
  }
  public createAndGetIdRoulette() {
    return this.http.get(this.END_POINT + 'createroulette');
  }
  public openRoulette(idRoulette: any) {
    return this.http.put(this.END_POINT + 'roulette/' + idRoulette, '');
  }
  public addBet(item: any) {
    return this.http.post(this.END_POINT + 'bet', item);
  }
  public closeRoulette(idRoulette: any) {
    return this.http.put(this.END_POINT + 'rouletteoff/' + idRoulette, '');
  }
  public getListRoulettes() {
    return this.http.get(this.END_POINT + 'listroulette');
  }
}
