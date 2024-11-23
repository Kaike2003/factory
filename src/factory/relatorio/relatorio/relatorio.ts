export abstract class Relatorio {
  abstract gerarConteudo(): void;
}

export class GerenciarRelatorio {
  public constructor(private aRelatorio: Relatorio) {}

  public gerarConteudo(): void {
    this.aRelatorio.gerarConteudo();
  }
}
