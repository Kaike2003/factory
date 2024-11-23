export abstract class Exportador {
  abstract exportar(): void;
}

export class GerenciarExportador {
  public constructor(private aExportador: Exportador) {}

  public exportar(): void {
    this.aExportador.exportar();
  }
}
