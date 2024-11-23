"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeNotificacao = void 0;
class NotificacaoEmail {
    enviar(mensagem) {
        console.log(`[Email] Enviando: ${mensagem}`);
    }
}
class NotificacaoSMS {
    enviar(mensagem) {
        console.log(`[SMS] Enviando: ${mensagem}`);
    }
}
class FabricaDeNotificacao {
    static criarNotificacao({ name }) {
        if (name === "email") {
            return new NotificacaoEmail();
        }
        else if (name === "sms") {
            return new NotificacaoSMS();
        }
        throw new Error("Canal de notificacao indisponivel");
    }
}
exports.FabricaDeNotificacao = FabricaDeNotificacao;
