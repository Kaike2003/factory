import { Mensagem } from "./mensagem";

export default class EmailMensagem implements Mensagem {
  enviar(mensagem: string): void {
    console.log("[EMAIL] " + mensagem);
  }
}
