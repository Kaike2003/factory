import { SistemaDePagamento } from "../../sistema";

export default class PixPagamento implements SistemaDePagamento {
  autorizarPagamento(): void {
    console.log("[PIX] autorizar pagamento");
  }

  confirmarPagamento(): void {
    console.log("[PIX] confirmar pagamento");
  }
}
