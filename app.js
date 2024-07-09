let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML     = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    
    } else {
        //el usuario no acerto
        if (numeroUsuario> numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //return significa que cuando ejecutemos generar numero secreto nos va aretornar un valor 
    //si el numero generado esta incluido en la lista
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length== numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }   else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            //includes recore toda la lista y si fue nombrado nos nombra tru o false
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar el intervalo de numeros
    //generar numero aleatorio   
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();
