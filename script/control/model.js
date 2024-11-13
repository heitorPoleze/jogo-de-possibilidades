const outStatus = document.getElementById("outStatus");

let dinheiro = 0;
let estilo = 0;


export function problemasDaIdade(vetor, nome, index) {
    const condicao = vetor[index].idade;
    if (condicao == 20) {
        vinteAnos(nome);
    }
    if(condicao == 25){
        vinteECincoAnos(nome);
    }
    if(condicao==30){
    }
}
function vinteAnos(nome){
    if (ou0ou1(2, 0)){
        const querCigarro = confirm("Você está numa festa. Aceita um cigarro?");
    
    if(querCigarro){
        if(ou0ou1(2, 1)){
    alert(`Parabéns, ${nome}! Agora você tem tabagismo 🤦‍♀️`);
    outStatus.innerHTML = atualizarStatus(-25, 10);
        }
        else{
            alert("Uau! Pressão baixa é irado!");
            outStatus.innerHTML = atualizarStatus(0, 10);
        }
}else{
        if(ou0ou1(2,0)){
            alert(`Agora você não tem papos no fumódromo`);
            outStatus.innerHTML = atualizarStatus(0, -10);
        }else{
            outStatus.innerHTML = atualizarStatus(10, 0);
        };
    }
}
}

function vinteECincoAnos(nome){
    const novoConcurso = confirm("Sua mãe te mandou um zap com o link do Concurso público do Banco do Brasil! Deseja estudar?");
    if(novoConcurso){
        if(ou0ou1(2,1)){
            alert("Show, agora você passou num ótimo concurso");
            outStatus.innerHTML = atualizarStatus(30,0);
        }else{
            alert(`Desculpa, ${nome}. Você só perdeu tempo e dinheiro 😓`);
            outStatus.innerHTML = atualizarStatus(-10,0);

        }
    }else{
        const querTrabalhar = confirm("Quer pelo menos trabalhar?");
        if(querTrabalhar){
            if(entre0e1() < 0.33){
                alert("Agora voce e caixa de supermercado zé");
                outStatus.innerHTML = atualizarStatus(2, -5);
            }else if(entre0e1() > 0.33 && entre0e1() < 0.66){
                alert("Você é um secretário maneiro");
                outStatus.innerHTML = atualizarStatus(10, -3);
            }else{
                alert("Você acertou em cheio no seu negócio e agora está rico!");
                outStatus.innerHTML = atualizarStatus(50, 30);
            }
        }else{
            alert("Bad Ending: Agora voce tem que fazer videos de react para ganhar dinheiro.");
        }
    }
}

function atualizarStatus(num1, num2){
    dinheiro += num1;
    estilo += num2;
    return `Dinheiro: ${dinheiro} <br> Estilo: ${estilo}`;
}

export function validarCPF(text){
    const removerCaractere = text.replace(/\D/g, '');
    if(removerCaractere.length == 11){
        return removerCaractere;
    }
    else {
        return false;
    }
}
    
  export function limpaCampos(...inp){
    inp.forEach(inp => {
            inp.value = "";
    })
}

 function ou0ou1(max, verificacao) {
    const resultado = Math.floor(Math.random() * max);
    verificacao = resultado;
    return resultado;
  }

function entre0e1(){
    const result = Math.random();
    return result;
}
