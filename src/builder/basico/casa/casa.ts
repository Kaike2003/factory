export default class Casa {
  public janelas: number;
  public portas: number;
  public garagem: boolean;
  public piscina: boolean;
  public jardim: boolean;

  public constructor() {
    this.janelas = 0;
    this.portas = 0;
    this.garagem = false;
    this.piscina = false;
    this.jardim = false;
  }
}
