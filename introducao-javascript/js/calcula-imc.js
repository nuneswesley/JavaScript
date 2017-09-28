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
        paciente.querySelector(".info-imc").textContent = calcularImc(peso,altura);
    }
}

function calcularImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
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