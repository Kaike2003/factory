"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportadorFactory = exports.TypeExportador = void 0;
var TypeExportador;
(function (TypeExportador) {
    TypeExportador["ARQUIVO"] = "arquivo";
})(TypeExportador || (exports.TypeExportador = TypeExportador = {}));
class ExportadorFactory {
    static criarExportador(tipo) {
        switch (tipo) {
            case TypeExportador.ARQUIVO:
                return new ArquivoExportador();
            default:
                throw new Error("Tipo de exportador inválido");
        }
    }
}
exports.ExportadorFactory = ExportadorFactory;
