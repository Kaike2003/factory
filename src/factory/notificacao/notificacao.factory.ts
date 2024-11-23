interface INotificacao {
  enviar(mensagem: string): void;
}

interface TNotificacao {
  name: "email" | "sms";
}

class NotificacaoEmail implements INotificacao {
  enviar(mensagem: string): void {
    console.log(`[Email] Enviando: ${mensagem}`);
  }
}

class NotificacaoSMS implements INotificacao {
  enviar(mensagem: string): void {
    console.log(`[SMS] Enviando: ${mensagem}`);
  }
}

export class FabricaDeNotificacao {
  public static criarNotificacao({ name }: TNotificacao): INotificacao {
    if (name === "email") {
      return new NotificacaoEmail();
    } else if (name === "sms") {
      return new NotificacaoSMS();
    }

    throw new Error("Canal de notificacao indisponivel");
  }
}
