import BoletoPagamento from "./pagamento/boleto/boleto.pagamento";
import CartaoPagamento from "./pagamento/cartao/cartao.pagamento";
import PixPagamento from "./pagamento/pix/pix.pagamento";
import { GerenciarSistemaDePagamento, SistemaDePagamento } from "./sistema";

export enum TypeSistemaDePagamento {
  PIX = "pix",
  BOLETO = "boleto",
  CARTAO = "cartao",
}

export class SistemaDePagamentoFactory {
  public static criarSistemaDePagamento(
    tipo: TypeSistemaDePagamento
  ): SistemaDePagamento {
    switch (tipo) {
      case TypeSistemaDePagamento.PIX:
        return new PixPagamento();

      case TypeSistemaDePagamento.BOLETO:
        return new BoletoPagamento();

      case TypeSistemaDePagamento.CARTAO:
        return new CartaoPagamento();

      default:
        throw new Error("Tipo de pagamento indisponivel");
    }
  }
}
