<div align="center">

# 🦸‍♂️ Projeto Classe Herói  

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)  

Desafio desenvolvido no bootcamp da **DIO (Digital Innovation One)**  
para praticar os fundamentos de **JavaScript** e **Programação Orientada a Objetos (POO)**.  

</div>

---

## 🎯 Objetivo

Criar uma classe genérica que represente um herói de uma aventura, utilizando:

- ✅ Variáveis  
- ✅ Operadores  
- ✅ Laços de repetição  
- ✅ Estruturas de decisão  
- ✅ Funções  
- ✅ Classes e Objetos  

---

## 🧩 Estrutura da Classe

A classe `Heroi` possui as seguintes propriedades:
- `nome`
- `idade`
- `tipo` → (*mago*, *guerreiro*, *monge* ou *ninja*)

E um método chamado `atacar()`, que exibe uma mensagem diferente conforme o tipo do herói:

| Tipo       | Ataque             |
|-------------|--------------------|
| Mago        | magia              |
| Guerreiro   | espada             |
| Monge       | artes marciais     |
| Ninja       | shuriken           |

---

## 💻 Código Principal

Abaixo está o código completo da classe `Heroi`, com o método `atacar()` e o programa principal que executa os ataques:

```javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque

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

    console.log(`${this.tipo} atacou usando ${ataque}`)
  }
}

function main() {
  const heroi1 = new Heroi("Gandalf", 2019, "mago")
  const heroi2 = new Heroi("Aragorn", 87, "guerreiro")
  const heroi3 = new Heroi("Lee", 40, "monge")
  const heroi4 = new Heroi("Naruto", 25, "ninja")

  const herois = [heroi1, heroi2, heroi3, heroi4]

  console.log("=== BATALHA DOS HERÓIS ===")
  for (let i = 0; i < herois.length; i++) {
    herois[i].atacar()
  }
}

main()

---

## 🧠 Saída Esperada

A saída exibida no terminal deve ser semelhante a esta:

=== BATALHA DOS HERÓIS ===
mago atacou usando magia
guerreiro atacou usando espada
monge atacou usando artes marciais
ninja atacou usando shuriken

🧰 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

✅ JavaScript

✅ Node.js

✅ VS Code

✅ Git e GitHub

✨ Autor

Feito com dedicação por Marcelo Azevedo 💪

📧 E-mail: marcell.azever+dev@gmail.com

🔗 LinkedIn: Marcello Azevedo