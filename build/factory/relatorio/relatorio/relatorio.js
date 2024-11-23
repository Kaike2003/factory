"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarRelatorio = exports.Relatorio = void 0;
class Relatorio {
}
exports.Relatorio = Relatorio;
class GerenciarRelatorio {
    constructor(aRelatorio) {
        this.aRelatorio = aRelatorio;
    }
    gerarConteudo() {
        this.aRelatorio.gerarConteudo();
    }
}
exports.GerenciarRelatorio = GerenciarRelatorio;
