// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let ingresarNombreLista;
let listaDeNombre = [];
let numeroMaximoDeNombres = 0; 
let numeroDeSorteos = 0;

function agregarAmigo() {
        let entradaDeNombre = (document.getElementById('amigo').value);
        entradaDeNombre = entradaDeNombre.trim(); 
        if (entradaDeNombre == "" || !/[a-zA-Z]/.test(entradaDeNombre)){
            alert("Inserte un nombre.");
            limpiarCaja();
        }else if(listaDeNombre.includes(entradaDeNombre)){
            alert("El nombre ya se encuentra en la lista, ingresar otro nombre.")
            limpiarCaja();
        }else{
            ingresarNombreLista = listaDeNombre.push(entradaDeNombre);
            //console.log(entradaDeNombre);
            //console.log(listaDeNombre);
            limpiarCaja();
            listaDeAmigos();
        } 
}

function limpiarCaja() {
    //Limpiar el valor en la caja de entrada de nombre luego de que se haya agregado un valor permitido y luego de hacer click en "añadir"
    let valorCaja = document.querySelector ('#amigo');
    valorCaja.value = '';
}

function listaDeAmigos(){
    let listaParaMostrar = document.querySelector('#listaAmigos');
    listaParaMostrar.innerHTML ='';
    for (let i = 0; i < listaDeNombre.length; i++) {
       listaParaMostrar.innerHTML += `<li>${listaDeNombre[i]}</li>`;
    }
}

function sortearAmigo(){
    numeroMaximoDeNombres = listaDeNombre.length;
    //console.log(numeroMaximoDeNombres); 
    if (numeroMaximoDeNombres > 1){
       let nombreSorteado = Math.floor(Math.random()*numeroMaximoDeNombres);
       //console.log(listaDeNombre[nombreSorteado]);
       let resultadoDeNombre = document.querySelector('#resultado');
       resultadoDeNombre.innerHTML = `El amigo secreto es: ${listaDeNombre[nombreSorteado]}`
       numeroDeSorteos++;
       if(numeroDeSorteos > 1){
        reiniciarJuego();
       }
    }else{
        alert("Por favor, inserte al menos 2 nombres.");
    }
}

function reiniciarJuego(){
    listaDeNombre = [];
    numeroMaximoDeNombres= 0; 
    document.querySelector('#listaAmigos').innerHTML = '';
    document.querySelector('#resultado').innerHTML = '';
}