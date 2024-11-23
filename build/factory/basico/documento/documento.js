"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarDocumento = exports.Documento = void 0;
class Documento {
}
exports.Documento = Documento;
class GerenciarDocumento {
    constructor(aDocumento) {
        this.aDocumento = aDocumento;
    }
    abrir() {
        this.aDocumento.abrir();
    }
    salvar() {
        this.aDocumento.salvar();
    }
    fechar() {
        this.aDocumento.fechar();
    }
}
exports.GerenciarDocumento = GerenciarDocumento;
