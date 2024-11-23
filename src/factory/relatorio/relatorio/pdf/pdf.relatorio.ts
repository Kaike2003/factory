import { Relatorio } from "../relatorio";

export default class PDFRelatorio implements Relatorio {
  gerarConteudo(): void {
    console.log("[PDF] gerado com sucesso.");
  }
}
