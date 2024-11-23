import { SistemaDePagamento } from "../../sistema";

export default class CartaoPagamento implements SistemaDePagamento {
  autorizarPagamento(): void {
    console.log("[CARTAO] autorizar pagamento");
  }

  confirmarPagamento(): void {
    console.log("[CARTAO] confirmar pagamento");
  }
}
