import { Documento, GerenciarDocumento } from "./documento";
import DocumentoPdf from "./pdf/pdf.documento";
import DocumentoWord from "./word/word.documento";

export enum TipoDocumento {
  WORD = "word",
  PDF = "pdf",
}

export class DocumentoFactory {
  public static criarDocumento(documento: TipoDocumento): Documento {
    if (documento === TipoDocumento.WORD) {
      return new GerenciarDocumento(new DocumentoWord());
    } else if (documento === TipoDocumento.PDF) {
      return new GerenciarDocumento(new DocumentoPdf());
    }

    throw new Error("Tipo de documento invalido");
  }
}
