export abstract class SistemaDePagamento {
  abstract autorizarPagamento(): void;
  abstract confirmarPagamento(): void;
}

export class GerenciarSistemaDePagamento {
  public constructor(private sistemaDePagamento: SistemaDePagamento) {}

  public executarOperacoes(): void {
    this.sistemaDePagamento.autorizarPagamento();
    this.sistemaDePagamento.confirmarPagamento();
  }
}


