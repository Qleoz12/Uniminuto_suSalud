import { Component, OnInit } from '@angular/core';
import { MacroservicioService } from 'app/data/macroservicio.service.ts.service';

@Component({
  selector: 'jhi-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  macroprocesosList: any[] = [];
  procesoList: any[] = [];
  subProcesoList: any[] = [];
  verificadorList: any[] = [];
  tecnicasEvualuativas: any[] = [];
  fuentesRefenreciales: any[] = [];
  criterios: any[] = [];
  categorias: any[] = [];
  IAFAS: any[] = [];
  rutasCritica: any[] = [];
  anos: any[] = [];
  periodos: any[] = [];

  constructor(private _sMacroservicioService: MacroservicioService) {}

  ngOnInit(): void {
    this._sMacroservicioService.getAll().subscribe(
      res => {
        console.log(res); // eslint-disable-line no-console
        this.macroprocesosList = res[0];
        this.procesoList = res[1];
        this.subProcesoList = res[2];
        this.verificadorList = res[3];
        this.tecnicasEvualuativas = res[4];
        this.fuentesRefenreciales = res[5];
        this.criterios = res[6];
        this.categorias = res[7];
        this.IAFAS = res[8];
        this.rutasCritica = res[9];
        this.anos = res[10];
        this.periodos = res[11];
      },
      error => {
        console.log(error); // eslint-disable-line no-console
      }
    );
  }

  updateChkbx(a: any) {
    console.log(a); // eslint-disable-line no-console
  }
}
