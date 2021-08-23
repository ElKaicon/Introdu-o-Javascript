var pacientes=document.querySelectorAll(".paciente")

for(var i=0; i<pacientes.length; i++) {
        var paciente = pacientes[i]
        var peso=paciente.querySelector(".info-peso")
        var altura=paciente.querySelector(".info-altura")
        var imc=paciente.querySelector(".info-imc")
        var valoraltura = altura.textContent
        var valorpeso = peso.textContent
        var calculoimc = valorpeso/(valoraltura*valoraltura) 
        imc.textContent = calculoimc
        
        console.log(calculoimc)
        
        var alturaevalida = true
        var pesoevalido = true
        
        if(valorpeso <= 0){
                peso.textContent = "peso inválido"
                pesoevalido = false
        }
        
        if(valoraltura <= 0){
                altura.textContent = "altura inválida"
                alturaevalida = false
        }
        
        if (alturaevalida && pesoevalido){
                var calculoimc = calculaimc(valorpeso,valoraltura) 
                imc.textContent = calculoimc
        }else{
                imc.textContent = "altura e peso inválido"
        }
}
function calculaimc (X,Y){
        var imc = X/(Y*Y)
        return imc.toFixed(2)
}