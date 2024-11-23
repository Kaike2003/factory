"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportadorFactory = exports.TypeExportador = void 0;
const arquivo_exportador_1 = __importDefault(require("./exportador/arquivo.exportador"));
var TypeExportador;
(function (TypeExportador) {
    TypeExportador["ARQUIVO"] = "arquivo";
})(TypeExportador || (exports.TypeExportador = TypeExportador = {}));
class ExportadorFactory {
    static criarExportador(tipo) {
        switch (tipo) {
            case TypeExportador.ARQUIVO:
                return new arquivo_exportador_1.default();
            default:
                throw new Error("Tipo de exportador inválido");
        }
    }
}
exports.ExportadorFactory = ExportadorFactory;
