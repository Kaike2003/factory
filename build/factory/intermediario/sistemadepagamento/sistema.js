"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarSistemaDePagamento = exports.SistemaDePagamento = void 0;
class SistemaDePagamento {
}
exports.SistemaDePagamento = SistemaDePagamento;
class GerenciarSistemaDePagamento {
    constructor(sistemaDePagamento) {
        this.sistemaDePagamento = sistemaDePagamento;
    }
    executarOperacoes() {
        this.sistemaDePagamento.autorizarPagamento();
        this.sistemaDePagamento.confirmarPagamento();
    }
}
exports.GerenciarSistemaDePagamento = GerenciarSistemaDePagamento;
