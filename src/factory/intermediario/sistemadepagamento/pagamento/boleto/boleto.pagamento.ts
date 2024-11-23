import { SistemaDePagamento } from "../../sistema";

export default class BoletoPagamento implements SistemaDePagamento {
  autorizarPagamento(): void {
    console.log("[BOLETO] autorizar pagamento");
  }

  confirmarPagamento(): void {
    console.log("[BOLETO] confirmar pagamento");
  }
}
