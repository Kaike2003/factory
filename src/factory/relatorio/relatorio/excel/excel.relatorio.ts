import { Relatorio } from "../relatorio";

export default class ExcelRelatorio implements Relatorio {
  gerarConteudo(): void {
    console.log("[EXECEL] gerado com sucesso.");
  }
}
