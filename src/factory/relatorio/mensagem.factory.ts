import EmailMensagem from "./mensagem/email.mensagem";
import { Mensagem } from "./mensagem/mensagem";

export enum TypeMensagem {
  EMAIL = "email",
}

export class MensagemFactory {
  public static criarMensagem(tipo: TypeMensagem): Mensagem {
    switch (tipo) {
      case TypeMensagem.EMAIL:
        return new EmailMensagem();
      default:
        throw new Error("Tipo de mensagem indesponivel");
    }
  }
}
