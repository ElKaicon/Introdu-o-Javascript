var botao=document.querySelector("#botaozao")
botao.addEventListener("click", function(event){
        event.preventDefault()
    var information=document.querySelector("#information")
    var paciente=obtemPacienteDoFormulario(information)
    var pacientetr=montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacientetr);


})

function obtemPacienteDoFormulario(information) {
    var paciente={
        nome1:information.nome1.value,
        peso1:information.peso1.value,
        altura1:information.altura1.value,
        porcentagemdegordura1:information.porcentagemdegordura1.value,
        imc:calculaimc (information.peso1.value,information.altura1.value)
    }
    return paciente

}

function montaTd(dado, classe) {
    var pacientetd=document.createElement("td")
    pacientetd.classList.add(classe);
    pacientetd.textContent=dado

    return pacientetd
}

function montaTr(paciente) {
    var pacientetr=document.createElement("tr")
    pacientetr.classList.add("paciente");
    pacientetr.appendChild(montaTd(paciente.nome1, "info-nome"));
    pacientetr.appendChild(montaTd(paciente.peso1, "info-peso"));
    pacientetr.appendChild(montaTd(paciente.altura1, "info-altura"));
    pacientetr.appendChild(montaTd(paciente.porcentagemdegordura1, "info-gordura"));
    pacientetr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacientetr

}