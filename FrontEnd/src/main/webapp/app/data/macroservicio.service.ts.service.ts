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

  getTecnicasEvaluativas(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'TecnicasEvaluativas');
  }

  getFuenteReferenciales(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'FuenteReferenciales');
  }

  getCriterioPuntuacion(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'criteriosPuntiacion');
  }

  getcategorias(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'categorias');
  }

  getIAFAS(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'IAFAS');
  }

  getRutaCritica(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'rutasCritica');
  }

  getAños(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'anos');
  }

  getPeriodos(): Observable<any> {
    return this.http.get<any>(SERVER_FAKEAPI_URL + 'periodos');
  }

  // saveVerificador(): Observable<any> {}

  getReport(): Observable<any[]> {
    return this.http.get<any[]>(SERVER_FAKEAPI_URL + 'report');
  }

  getAll(): Observable<any> {
    return forkJoin([
      this.getMacorservicios(),
      this.getProcesos(),
      this.getSubprocesos(),
      this.getverificadores(),
      this.getTecnicasEvaluativas(),
      this.getFuenteReferenciales(),
      this.getCriterioPuntuacion(),
      this.getcategorias(),
      this.getIAFAS(),
      this.getRutaCritica(),
      this.getAños(),
      this.getPeriodos(),
      this.getReport(),
    ]);
  }
}
