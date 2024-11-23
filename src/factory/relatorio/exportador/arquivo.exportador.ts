import { Exportador } from "./exportador";

export default class ArquivoExportador implements Exportador {
  exportar(): void {
    console.log("[ARQUIVO] exportado com sucesso.");
  }
}
