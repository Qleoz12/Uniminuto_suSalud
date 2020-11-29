import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_FAKEAPI_URL } from 'app/app.constants';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MacroservicioService {
  constructor(private http: HttpClient) {}

  getMacorservicios(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'macroprocesos');
  }

  getProcesos(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'procesos');
  }

  getSubprocesos(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'subprocesos');
  }

  getverificadores(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'verificadores');
  }

  getAll(): Observable<any> {
    return forkJoin([this.getMacorservicios(), this.getProcesos(), this.getSubprocesos(), this.getverificadores()]);
  }
}
