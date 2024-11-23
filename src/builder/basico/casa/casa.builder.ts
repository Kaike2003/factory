import Casa from "./casa";

export default class CasaBuilder {
  private casa: Casa;

  public constructor() {
    this.casa = new Casa();
  }

  public adicionarJanelas(numero: number): CasaBuilder {
    this.casa.janelas = numero;
    return this;
  }

  public adicinioarPortas(numero: number): CasaBuilder {
    this.casa.portas = numero;
    return this;
  }

  public adicionarPiscina(): CasaBuilder {
    this.casa.piscina = true;
    return this;
  }

  public adicionarGaragem(): CasaBuilder {
    this.casa.garagem = true;
    return this;
  }

  public adicionarJardim(): CasaBuilder {
    this.casa.jardim = true;
    return this;
  }

  public construir(): Casa {
    return this.casa;
  }
}
