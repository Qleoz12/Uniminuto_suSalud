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
  constructor(private _sMacroservicioService: MacroservicioService) {}

  ngOnInit(): void {
    this._sMacroservicioService.getAll().subscribe(
      res => {
        console.log(res); // eslint-disable-line no-console
        this.macroprocesosList = res[0];
        this.procesoList = res[1];
        this.subProcesoList = res[2];
        this.verificadorList = res[3];
      },
      error => {
        console.log(error); // eslint-disable-line no-console
      }
    );
  }
}
