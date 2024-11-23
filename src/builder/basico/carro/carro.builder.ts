import Carro from "./carro";

export default class CarroBuilder {
  private carro: Carro;

  public constructor() {
    this.carro = new Carro();
  }

  public addTipoMotor(tipo: string): CarroBuilder {
    this.carro.tipoMotor = tipo;
    return this;
  }

  public addNumeroPortas(numero: number): CarroBuilder {
    this.carro.numeroPortas = numero;
    return this;
  }

  public addTipoTransmissao(tipo: "manual" | "automatico"): CarroBuilder {
    this.carro.tipoTransmissao = tipo;
    return this;
  }

  public addCor(cor: string): CarroBuilder {
    this.carro.cor = cor;
    return this;
  }

  public addTeto(): CarroBuilder {
    this.carro.tetoSolar = true;
    return this;
  }

  public construir(): Carro {
    return this.carro;
  }
}
