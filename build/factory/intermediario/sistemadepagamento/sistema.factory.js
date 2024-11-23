"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDePagamentoFactory = exports.TypeSistemaDePagamento = void 0;
const boleto_pagamento_1 = __importDefault(require("./pagamento/boleto/boleto.pagamento"));
const cartao_pagamento_1 = __importDefault(require("./pagamento/cartao/cartao.pagamento"));
const pix_pagamento_1 = __importDefault(require("./pagamento/pix/pix.pagamento"));
var TypeSistemaDePagamento;
(function (TypeSistemaDePagamento) {
    TypeSistemaDePagamento["PIX"] = "pix";
    TypeSistemaDePagamento["BOLETO"] = "boleto";
    TypeSistemaDePagamento["CARTAO"] = "cartao";
})(TypeSistemaDePagamento || (exports.TypeSistemaDePagamento = TypeSistemaDePagamento = {}));
class SistemaDePagamentoFactory {
    static criarSistemaDePagamento(tipo) {
        switch (tipo) {
            case TypeSistemaDePagamento.PIX:
                return new pix_pagamento_1.default();
            case TypeSistemaDePagamento.BOLETO:
                return new boleto_pagamento_1.default();
            case TypeSistemaDePagamento.CARTAO:
                return new cartao_pagamento_1.default();
            default:
                throw new Error("Tipo de pagamento indisponivel");
        }
    }
}
exports.SistemaDePagamentoFactory = SistemaDePagamentoFactory;
