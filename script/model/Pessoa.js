 class Pessoa{
    constructor(nome, idade, cpf, dataNasc, dinheiro = 0, estilo = 0){
    this.nome = nome,
    this.idade = idade,
    this.cpf = cpf,
    this.dataNasc = dataNasc,
    this.dinheiro = dinheiro,
    this.estilo = estilo
}

    saida(){
        return `Nome: ${this.nome} <br>
                Idade: ${this.idade} <br>
                CPF: ${this.cpf} <br>
                Ano de Nascimento ${this.dataNasc}`;
    };

    atualizarStatus(num1, num2){
    this.dinheiro += num1;
    this.estilo += num2;
    return `Dinheiro: ${this.dinheiro} <br> Estilo: ${this.estilo}`;

    }
}

export default Pessoa;