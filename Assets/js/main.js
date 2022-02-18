
let ganadas =  0;
let perdidas = 0;
let empatados = 0;
let opcionesInvalidas = 0;
let numeroPartidas = parseInt(prompt("¿Cuantas veces quieres jugar?"));

for (let index = 0; index < numeroPartidas; index++) {
    let opcionUsuario = parseInt(prompt("Empecemos entonces, recuerda lo siguiente: \n 0 es igual a piedra \n 1 es igual papel \n 2 es igual a tijera \n ¿Cual es tu eleccion?"));
    let opcionMaquina = Math.floor(Math.random() * 3);

    if (opcionUsuario >= 0 && opcionUsuario <= 2) {
        console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario}`);
        if (opcionUsuario - opcionMaquina == 0) {
            alert("Empatados")
            console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario} empatados`)
            empatados++
        } else if (opcionUsuario - opcionMaquina == -1) {
            alert("Has perdido contra una maquina")
            console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario} perdido 1 y 2`)
            perdidas++
        } else if (opcionUsuario - opcionMaquina == -2) {
            alert("Has ganado")
            console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario} ganado 1`)
            ganadas++
        } else if (opcionUsuario - opcionMaquina == 1) {
            if (opcionUsuario = 1) {
                alert("Has ganado")
                console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario} ganado 2`)
                ganadas++
            } else {
                alert("Has perdido contra una maquina")
                console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario} perdido 3`)
                perdidas++
            }
        } else if (opcionUsuario - opcionMaquina == 2) {
            alert("Has ganado")
            console.log(`Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario} ganado 3`)
            ganadas++
        } else {
            alert('Por favor, selecciona 0, 1 o 2 como valor.')
            console.log(`Por favor, selecciona 0, 1 o 2 como valor. Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario}`)
            
        }
        
    } else {alert('Por favor, selecciona 0, 1 o 2 como valor.')
    console.log(`Por favor, selecciona 0, 1 o 2 como valor. Valor de la maquina ${opcionMaquina} valor del usuario ${opcionUsuario}`)
    opcionesInvalidas++}
}

var imagen = "hola";
if (ganadas>perdidas){
    var imagen = `"Assets\\img\\trofeo_ganador.jpg"`;
    var textTitle = "Ganaste";
} else if (ganadas<perdidas) {
    var imagen = `"Assets\\img\\trofeo_perdedor.jpg"`;
    var textTitle = "Perdiste";
} else {
    var imagen = `"Assets\\img\\empate.jpg"`;
    var textTitle = "Empataste";
};

console.log(`Has ganado ${ganadas} veces, perdido ${perdidas} veces, empatado ${empatados} veces y has introducido ${opcionesInvalidas} numeros invalidos`);

let Excuse = document.querySelector("#excuse");
Excuse.innerHTML = `<div class="card" style="width: 18rem;">
  <img src=${imagen} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${textTitle} </h5>
    <p class="card-text">Has ganado ${ganadas} veces, perdido ${perdidas} veces, empatado ${empatados} veces y has introducido ${opcionesInvalidas} numeros invalidos</p>
    <a href="#" class="btn btn-primary" value="Actualizar" onclick="location.reload()">jugar de nuevo</a>
  </div>
</div>`;