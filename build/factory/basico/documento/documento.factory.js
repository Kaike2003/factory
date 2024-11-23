"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoFactory = exports.TipoDocumento = void 0;
const documento_1 = require("./documento");
const pdf_documento_1 = __importDefault(require("./pdf/pdf.documento"));
const word_documento_1 = __importDefault(require("./word/word.documento"));
var TipoDocumento;
(function (TipoDocumento) {
    TipoDocumento["WORD"] = "word";
    TipoDocumento["PDF"] = "pdf";
})(TipoDocumento || (exports.TipoDocumento = TipoDocumento = {}));
class DocumentoFactory {
    static criarDocumento(documento) {
        if (documento === TipoDocumento.WORD) {
            return new documento_1.GerenciarDocumento(new word_documento_1.default());
        }
        else if (documento === TipoDocumento.PDF) {
            return new documento_1.GerenciarDocumento(new pdf_documento_1.default());
        }
        throw new Error("Tipo de documento invalido");
    }
}
exports.DocumentoFactory = DocumentoFactory;
