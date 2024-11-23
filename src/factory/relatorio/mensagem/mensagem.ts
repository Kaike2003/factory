export abstract class Mensagem {
  abstract enviar(mensagem: string): void;
}

export class GerenciarMensagem {
  public constructor(private aMensagem: Mensagem) {}

  public enviar(mensagem: string): void {
    this.aMensagem.enviar(mensagem);
  }
}
