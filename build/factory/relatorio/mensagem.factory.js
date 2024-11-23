"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemFactory = exports.TypeMensagem = void 0;
const email_mensagem_1 = __importDefault(require("./mensagem/email.mensagem"));
var TypeMensagem;
(function (TypeMensagem) {
    TypeMensagem["EMAIL"] = "email";
})(TypeMensagem || (exports.TypeMensagem = TypeMensagem = {}));
class MensagemFactory {
    static criarMensagem(tipo) {
        switch (tipo) {
            case TypeMensagem.EMAIL:
                return new email_mensagem_1.default();
            default:
                throw new Error("Tipo de mensagem indesponivel");
        }
    }
}
exports.MensagemFactory = MensagemFactory;
