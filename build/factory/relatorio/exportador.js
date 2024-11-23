"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarExportador = exports.Exportador = void 0;
class Exportador {
}
exports.Exportador = Exportador;
class GerenciarExportador {
    constructor(aExportador) {
        this.aExportador = aExportador;
    }
    exportar() {
        this.aExportador.exportar();
    }
}
exports.GerenciarExportador = GerenciarExportador;
