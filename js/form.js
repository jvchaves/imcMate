var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function() {
    event.preventDefault();
    // Armazena os valores dos novos personagens
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obterPacienteDoFormulario(form);

    var pacienteTr  = montaTr(paciente);


    

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
})
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");

    var alturaTd = montaTd(paciente.altura, "info-altura");
    
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    
    var imcTd = montaTd(paciente.imc, "info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;


}
function obterPacienteDoFormulario(form) {
    var paciente = {
         nome: form.nome.value,
         peso: form.peso.value,
         altura: form.altura.value,
         gordura: form.gordura.value,
         imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;

    td.classList.add(classe);
    return td;
}