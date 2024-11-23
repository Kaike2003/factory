export abstract class Documento {
  abstract abrir(): void;
  abstract salvar(): void;
  abstract fechar(): void;
}

export class GerenciarDocumento {
  public constructor(private aDocumento: Documento) {}

  public abrir(): void {
    this.aDocumento.abrir();
  }

  public salvar(): void {
    this.aDocumento.salvar();
  }

  public fechar(): void {
    this.aDocumento.fechar();
  }
}
