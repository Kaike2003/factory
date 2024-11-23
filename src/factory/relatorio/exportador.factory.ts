import ArquivoExportador from "./exportador/arquivo.exportador";
import { Exportador } from "./exportador/exportador";

export enum TypeExportador {
  ARQUIVO = "arquivo",
}

export class ExportadorFactory {
  public static criarExportador(tipo: TypeExportador): Exportador {
    switch (tipo) {
      case TypeExportador.ARQUIVO:
        return new ArquivoExportador();

      default:
        throw new Error("Tipo de exportador inválido");
    }
  }
}
