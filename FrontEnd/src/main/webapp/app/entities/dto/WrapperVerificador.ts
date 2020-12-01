import { Verificador } from './verificador';

export class WrapperVerificador {
  private verificador: Verificador;

  public getVerificador(): Verificador {
    return this.verificador;
  }

  public setVerificador(verificador: Verificador): void {
    this.verificador = verificador;
  }

  constructor(verificador: Verificador) {
    this.verificador = verificador;
  }
}
