import { Component, OnInit } from '@angular/core';
import { MacroservicioService } from 'app/data/macroservicio.service.ts.service';

@Component({
  selector: 'jhi-bandeja-verificadores',
  templateUrl: './bandeja-verificadores.component.html',
  styleUrls: ['./bandeja-verificadores.component.scss'],
})
export class BandejaVerificadoresComponent implements OnInit {
  reportList: any[] = [];
  constructor(private _sMacroservicioService: MacroservicioService) {}

  ngOnInit(): void {
    this._sMacroservicioService.getReport().subscribe((reportList: any[]) => {
      this.reportList = reportList;
      this.reportList.splice(this.reportList.length + 1, 0, {
        id: 5,
        periodo: '2020 Tercer Periodo',
        macroproceso: 'Macroproceso 4',
        proceso: 'Proceso 4',
        subProceso: 'Sub-proceso 3',
        verificador: 'verificador 4',
        tecnicasEvaluativas: 'Téc Eva 3, Téc Eva 2',
        fuenteReferencial: 'Fuente 1, Fuente 2',
        Criterios: 'empty',
        estadoVerificador: 'Activo',
        I4: true,
        II2: false,
        IIE: true,
        III1: true,
        III2: true,
        III3: false,
        RC1: true,
        RC2: true,
        RC3: true,
        RC4: false,
      });
    });
  }
}
