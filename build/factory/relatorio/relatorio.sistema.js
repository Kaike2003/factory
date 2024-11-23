"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SistemRelatorio {
    constructor(aRelatorio, aMensagem, aExportador) {
        this.aRelatorio = aRelatorio;
        this.aMensagem = aMensagem;
        this.aExportador = aExportador;
    }
    executar(mensagem) {
        this.aRelatorio.gerarConteudo();
        this.aExportador.exportar();
        this.aMensagem.enviar(mensagem);
    }
}
exports.default = SistemRelatorio;
