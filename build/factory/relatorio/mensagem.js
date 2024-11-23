"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarMensagem = exports.Mensagem = void 0;
class Mensagem {
}
exports.Mensagem = Mensagem;
class GerenciarMensagem {
    constructor(aMensagem) {
        this.aMensagem = aMensagem;
    }
    enviar(mensagem) {
        this.aMensagem.enviar(mensagem);
    }
}
exports.GerenciarMensagem = GerenciarMensagem;
