"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistica = void 0;
class Navio {
    entregar() {
        console.log("Entraga por navio");
    }
}
class Caminhao {
    entregar() {
        console.log("Entrega por caminhao");
    }
}
class Logistica {
    static criarTransporte({ name }) {
        if (name === "caminhao") {
            return new Caminhao();
        }
        else if (name === "navio") {
            return new Navio();
        }
        throw new Error("Transporte indisponivel");
    }
}
exports.Logistica = Logistica;
