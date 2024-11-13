//ATUALMENTE VALIDANDO SE PESSOA JÁ EXISTE

import Pessoa from "../model/Pessoa.js";
import * as Model from "../control/model.js";

const inName = document.getElementById("inName");
const inAge = document.getElementById("inAge");
const inCPF = document.getElementById("inCPF");
const inNasc = document.getElementById("inNasc");
const btAddAno = document.getElementById("btAddAno");
const btGerarPessoa = document.getElementById("btGerarPessoa");
const outMsg = document.getElementById("outMsg");


const vetPessoas = [];


btGerarPessoa.addEventListener('click', function () {
    var nome = inName.value;
    var age = Number(inAge.value);
    var CPF = inCPF.value;
    var anoNasc = Number(inNasc.value);

    const anoAtual = new Date().getFullYear();

    if (inName.value == ""  || inAge.value == "" || inCPF.value == "" || inNasc.value == "") {
        alert("Preencha todo o formulário");
    }else if(!isNaN(nome)){
        alert('O nome não pode ser um número!');
        Model.limpaCampos(inName);
       inName.focus();
    }else if(isNaN(age)){
        alert('A idade tem que ser um número!');
        Model.limpaCampos(inAge);
        inAge.focus();
    }else if(!Model.validarCPF(CPF)){
        alert("CPF inválido");
        Model.limpaCampos(inCPF);
        inCPF.focus();
    }else if(anoNasc + age != anoAtual && anoNasc + age != anoAtual - 1){
        alert("Idade e/ou Ano de Nascimento inválido.");
        Model.limpaCampos(inAge, inNasc);
        inAge.focus();
    }else{
        if(vetPessoas.length < 1){
            criaPessoa(nome, age, CPF, anoNasc)
        }else{
            if(verificaNomeECPF()){
                criaPessoa(nome, age, CPF, anoNasc);
            }
        }
    }
})

function verificaNomeECPF(){
    for(let i = 0; i < vetPessoas.length; i++){
        if(vetPessoas[i].nome == inName.value){
        alert("Não pode registrar um nome já existente.")
        Model.limpaCampos(inName);
        inName.focus();
        return false;
        }else if(vetPessoas[i].cpf == inCPF.value){
            alert("Não pode registrar um CPF já existente.");
            Model.limpaCampos(inCPF);
            inCPF.focus();
            return false;
        }else{
            return true;
        }
    }
}

btAddAno.addEventListener("click", function () {
    let nomeBusca = inName.value;

    if (vetPessoas.length < 1) {
        alert(`Não há nenhuma pessoa definida.`);
    } else {

        for (let i = 0; i < vetPessoas.length; i++) {
            if (vetPessoas[i].nome.toUpperCase() == nomeBusca.toUpperCase()) {
                vetPessoas[i].idade++;
                Model.problemasDaIdade(vetPessoas, nomeBusca, i);
                outMsg.innerHTML = `Parabéns, ${nomeBusca}! Agora sua idade é ${vetPessoas[i].idade}`;
                break;
            }
            else {
                outMsg.innerHTML = `Não há ${nomeBusca} no sistema.`;
            }
        }
    }
})


function criaPessoa(nome, age, CPF, anoNasc){
    const newPessoa = new Pessoa(nome, age, Model.validarCPF(CPF), anoNasc);
        
    vetPessoas.push(newPessoa);

    outMsg.innerHTML = newPessoa.saida();

    Model.limpaCampos(inAge, inCPF, inNasc);

    inName.focus();
}