interface ITransport {
  entregar(): void;
}

interface ILogistica {
  name: "caminhao" | "navio";
}

class Navio implements ITransport {
  entregar(): void {
    console.log("Entraga por navio");
  }
}

class Caminhao implements ITransport {
  entregar(): void {
    console.log("Entrega por caminhao");
  }
}

export class Logistica {
  public static criarTransporte({ name }: ILogistica): ITransport {
    if (name === "caminhao") {
      return new Caminhao();
    } else if (name === "navio") {
      return new Navio();
    }

    throw new Error("Transporte indisponivel");
  }
}
