import { Documento } from "../documento";

export default class DocumentoPdf implements Documento {
  abrir(): void {
    console.log("[PDF] documento aberto");
  }

  fechar(): void {
    console.log("[PDF] documento fechado");
  }

  salvar(): void {
    console.log("[PDF] documento salvamento");
  }
}
