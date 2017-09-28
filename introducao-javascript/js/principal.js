// console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var pesoEhValido = true;
    var AlturaEhValido = true;
    
    if (peso <= 0 ||peso >= 1000){
        console.log("Peso Inválido");
        pesoEhValido = false;
        paciente.querySelector(".info-imc").textContent  = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 ||altura >= 3.00){
        console.log("Altura inválido");
        AlturaEhValido = false;
        paciente.querySelector(".info-imc").textContent  = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (AlturaEhValido && pesoEhValido)
    {
        paciente.querySelector(".info-imc").textContent = (peso /(altura * altura)).toFixed(2);
    }
}

// console.log(paciente); //tr
// console.log(peso);  
// console.log(altura);  
// console.log(imc);

// titulo.addEventListener("click", mostraMensagem);

// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }


// titulo.addEventListener("click", function(){
//     console.log("Ola função anonima");
// } )



var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);


    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);


    console.log(pacienteTr);
    

    // console.log(form.nome.value);
    // console.log(form.peso.value);
    // console.log(form.altura.value);
    // console.log(form.gordura.value);

})
// console.log(botaoAdicionar);