"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioFactory = exports.TypeRelatorio = void 0;
const excel_relatorio_1 = __importDefault(require("./relatorio/excel/excel.relatorio"));
const pdf_relatorio_1 = __importDefault(require("./relatorio/pdf/pdf.relatorio"));
var TypeRelatorio;
(function (TypeRelatorio) {
    TypeRelatorio["PDF"] = "pdf";
    TypeRelatorio["EXCEL"] = "excel";
})(TypeRelatorio || (exports.TypeRelatorio = TypeRelatorio = {}));
class RelatorioFactory {
    static criarRelatorio(tipo) {
        switch (tipo) {
            case TypeRelatorio.PDF:
                return new pdf_relatorio_1.default();
            case TypeRelatorio.EXCEL:
                return new excel_relatorio_1.default();
            default:
                throw new Error("Tipo de relatorio indesponivel");
        }
    }
}
exports.RelatorioFactory = RelatorioFactory;
