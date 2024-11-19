import * as Input from "../control/inputs.js";
import * as Game from "../control/game/game.js";
import criaPessoa from "../control/criaPessoa.js";

const inName = document.getElementById("inName");
const inAge = document.getElementById("inAge");
const inCPF = document.getElementById("inCPF");
const inNasc = document.getElementById("inNasc");
const btAddAno = document.getElementById("btAddAno");
const btGerarPessoa = document.getElementById("btGerarPessoa");
const outMsg = document.getElementById("outMsg");


const vetPessoas = [];

var nome = inName.value;
var age = Number(inAge.value);
var CPF = inCPF.value;
var anoNasc = Number(inNasc.value);

btGerarPessoa.addEventListener('click', function () {

    const anoAtual = new Date().getFullYear();

    if (inName.value == ""  || inAge.value == "" || inCPF.value == "" || inNasc.value == "") {
        alert("Preencha todo o formulário");
    }else if(!isNaN(nome)){
        alert('O nome não pode ser um número!');
        Input.limpaCampos(inName);
       inName.focus();
    }else if(isNaN(age)){
        alert('A idade tem que ser um número!');
        Input.limpaCampos(inAge);
        inAge.focus();
    }else if(!Input.validarCPF(CPF)){
        alert("CPF inválido");
        Input.limpaCampos(inCPF);
        inCPF.focus();
    }else if(anoNasc + age != anoAtual && anoNasc + age != anoAtual - 1){
        alert("Idade e/ou Ano de Nascimento inválido.");
        Input.limpaCampos(inAge, inNasc);
        inAge.focus();
    }else{
        if(vetPessoas.length < 1 || !Input.CPFeNomeExistente(vetPessoas, inName, inCPF)){
            criaPessoa(vetPessoas, nome, age, CPF, anoNasc);
            Input.limpaCampos(inAge, inCPF, inNasc);
            inName.focus();
        }
    }
})


btAddAno.addEventListener("click", function () {
    let nomeBusca = inName.value;

        if(Input.pessoaExiste(inName, vetPessoas)){
            outMsg.innerHTML = `Parabéns, ${nomeBusca}! Agora sua idade é ${Input.incrementaIdade(vetPessoas, nomeBusca)}`;
            console.log(vetPessoas);
            Game.problemasDaIdade(vetPessoas, nomeBusca);
        }else{
            alert(`Não há ${nomeBusca} no sistema.`);
        }
})
