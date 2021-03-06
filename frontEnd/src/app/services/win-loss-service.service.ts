import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinLossServiceService {
  public API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getWinLoss(id: unknown): Observable<any> {
    return this.http.get(this.API + '/winloss/' + id);
  }
}
