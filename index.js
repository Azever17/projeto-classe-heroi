
// Classe Heroi conforme especificado
class Heroi{
    constructor(nome, idade, tipo){
        // Variáveis (propriedades)
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

 // Método atacar
 atacar() {
    let ataque
    // Estruturas de decisão (if/else)
    if (this.tipo === "mago") {
        ataque = "magia"
    } else if (this.tipo === "guerreiro") {
        ataque = "espada"
    } else if (this.tipo === "monge") {
        ataque = "artes marciais"
    } else if (this.tipo === "ninja") {
        ataque = "shuriken"
    } else {
        ataque = "ataque indefinido"
    }

    // Saída exatamente como solicitado
    console.log(`${this.tipo} atacou usando ${ataque}`)

   }
}

 // Função principal
function main() {
   // Criando objetos heróis
   const heroi1 = new Heroi("Gandalf", 2019, "mago")
   const heroi2 = new Heroi("Arragorn", 87, "guerreiro")
   const heroi3 = new Heroi("Lee", 40, "monge")
   const heroi4 = new Heroi("Naruto", 25, "ninja")

   // Array para usar com laço de repetição
   const herois = [heroi1, heroi2, heroi3, heroi4]

    // Laço de repetição (for)
    console.log("=== BATALHA DOS HERÓIS ===")
    for (let i = 0; i < herois.length; i++) {
        herois[i].atacar()
    }

}

// executando a funcão principal
main()