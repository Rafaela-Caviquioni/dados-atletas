class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return 'Infantil'
    } else if (this.idade == 12 || this.idade == 13) {
      return 'Juvenil'
    } else if (this.idade == 14 || this.idade == 15) {
      return 'Intermediário'
    } else if (this.idade >= 16 && this.idade <= 30) {
      return 'Adulto'
    } else {
      return 'Sem categoria'
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura)
  }

  calculaMediaValida() {
    let notasOrdenadas = this.notas.sort((a, b) => a - b)
    let notasMeio = notasOrdenadas.slice(1, 4)
    let soma = 0
    notasMeio.forEach(nota => {
      soma += nota
    })
    return soma / notasMeio.length
  }

  obtemNomeAtleta() {
    return `Nome: ${this.nome}`
  }

  obtemIdadeAtleta() {
    return `Idade: ${this.idade}`
  }

  obtemPesoAtleta() {
    return `Peso: ${this.peso}`
  }

  obtemAlturaAtleta() {
    return `Altura: ${this.altura}`
  }

  obtemNotasAtleta() {
    return `notas: ${this.notas}`
  }

  obtemCategoria() {
    let categoria = this.calculaCategoria()
    return `Categoria: ${categoria}`
  }

  obtemIMC() {
    let imc = this.calculaIMC()
    return `IMC: ${imc}`
  }

  obtemMediaValida() {
    let media = this.calculaMediaValida()
    return `Média Válida: ${media}`
  }
}

const atleta = new Atleta(
  'Cesar Abascal',
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
)
console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
