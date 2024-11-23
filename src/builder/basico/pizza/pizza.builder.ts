import Pizza from "./pizza";

export default class PizzaBuilder {
  private pizza: Pizza;

  public constructor() {
    this.pizza = new Pizza();
  }

  public adicionarQueijo(): PizzaBuilder {
    this.pizza.queijo = true;
    return this;
  }

  public adicionarTomate(): PizzaBuilder {
    this.pizza.tomate = true;
    return this;
  }

  public adicionarCalabresa(): PizzaBuilder {
    this.pizza.calabresa = true;
    return this;
  }

  public adicionarAzeitonas(): PizzaBuilder {
    this.pizza.azeitonas = true;
    return this;
  }

  public adicionarBordaRecheada(): PizzaBuilder {
    this.pizza.bordaRecheada = true;
    return this;
  }

  public construir(): Pizza {
    return this.pizza;
  }
}
