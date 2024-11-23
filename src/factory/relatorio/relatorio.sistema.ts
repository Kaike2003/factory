import { Exportador } from "./exportador/exportador";
import { Mensagem } from "./mensagem/mensagem";
import { Relatorio } from "./relatorio/relatorio";

export default class SistemRelatorio {
  public constructor(
    private aRelatorio: Relatorio,
    private aMensagem: Mensagem,
    private aExportador: Exportador
  ) {}

  public executar(mensagem: string) {
    this.aRelatorio.gerarConteudo();
    this.aExportador.exportar();
    this.aMensagem.enviar(mensagem);
  }
}
