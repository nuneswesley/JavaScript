var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    // estraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    //cria a tr e td do form
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
    imcTd.textContent = calcularImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //add paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);


    console.log(pacienteTr);
    

    // console.log(form.nome.value);
    // console.log(form.peso.value);
    // console.log(form.altura.value);
    // console.log(form.gordura.value);

})
// console.log(botaoAdicionar);

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome:   form.nome.value,
        peso:   form.peso.value,
        altura: form.altura.value,
        gordura:    form.gordura.value,
        imc: calcularImc(form.peso.value,form.altura.value)
    }
    return paciente;
}



