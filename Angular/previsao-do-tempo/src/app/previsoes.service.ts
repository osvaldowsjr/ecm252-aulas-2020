import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Previsao } from './model/previsao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor(private httpClient: HttpClient) {
  }
  
  public obterPrevisoes(): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/weather?q=Embu&appid=3328e49056c0437b3efee546a1439c01&units=metric&lang=pt_br&cnt=16');
    };
}
