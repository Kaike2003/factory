import ExcelRelatorio from "./relatorio/excel/excel.relatorio";
import PDFRelatorio from "./relatorio/pdf/pdf.relatorio";
import { Relatorio } from "./relatorio/relatorio";

export enum TypeRelatorio {
  PDF = "pdf",
  EXCEL = "excel",
}

export class RelatorioFactory {
  public static criarRelatorio(tipo: TypeRelatorio): Relatorio {
    switch (tipo) {
      case TypeRelatorio.PDF:
        return new PDFRelatorio();

      case TypeRelatorio.EXCEL:
        return new ExcelRelatorio();

      default:
        throw new Error("Tipo de relatorio indesponivel");
    }
  }
}
