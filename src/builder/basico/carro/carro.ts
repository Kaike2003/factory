export default class Carro {
  public tipoMotor: string;
  public numeroPortas: number;
  public tipoTransmissao: "manual" | "automatico";
  public cor: string;
  public tetoSolar: boolean;

  public constructor() {
    this.tipoMotor = "";
    this.numeroPortas = 0;
    this.tipoTransmissao = "manual";
    this.cor = "";
    this.tetoSolar = false;
  }
}
