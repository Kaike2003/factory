import { Documento } from "../documento";

export default class DocumentoWord implements Documento {
  abrir(): void {
    console.log("[WORD] documento aberto");
  }

  fechar(): void {
    console.log("[WORD] documento fechado");
  }

  salvar(): void {
    console.log("[WORD] documento salvo");
  }
}
