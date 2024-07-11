// //1

// let numeroA = 3
// let numeroB = 2

// if(numeroA > numeroB){
//   console.log("el primer numero es mayor que el segundo")
// }

// //2

// let numeroA = 2
// let numeroB = 2

// if(numeroA === numeroB){
//   console.log("los numeros son iguales")
// } else{
//   console.log("los numeros son diferentes")
// }

// //3

// let numeroA = 1
// let numeroB = 2

// if(numeroA < numeroB ){
//   console.log("numeroB es mayor")
// } else if(numeroA > numeroB){
//   console.log("numeroA es mayor")
// }else{
//   console.log("los numeros son iguales")
// } 

// //4

// let numeroA = 4
// let numeroB = 8
// let numeroC = 1

// if (numeroA < numeroB) {
//   if (numeroA < numeroC) {
//     alert("numeroA es el numero mas chico")
//   } else if ( numeroIngresado == numeroIncognito) {
//     alert("numeroC es el numero mas chico")
//   }
// } else if ( numeroIngresado == numeroIncognito) {
//   if (numeroB < numeroC) {
//     alert("numeroB es el numero mas chico")
//   } else if ( numeroIngresado == numeroIncognito) {
//     alert("numeroC es el numero mas chico")
//   }
// }

//5

// let persona1 = {
//   nombre : "Javier",
//   edad : 25,
//   altura : 185
// }

// let persona2 = {
//   nombre : "Fernando",
//   edad : 26,
//   altura : 170
// }

// if (persona1.edad > persona2.edad) {
// alert("persona1 es la persona con mas edad ");
// }else{
//   if (persona1.edad < persona2.edad){
//     alert("persona2 es la persona con mas edad ");
//   }
// }

// if (persona1.altura > persona2.altura) {
// alert("persona1 es la persona con mas altura ");
// }else{
//   if (persona1.altura < persona2.altura){
//     alert("persona2 es la persona con mas altura ");
//   }
// }


// //6

// let nombre = prompt("ingresa tu nombre")
// let edad = parseInt(prompt("ingresa tu edad"))

// //Edad

// if (edad >= 18) {
//   alert("cumple con el requisito: Mayor de edad")

//   //Altura

//   let altura = parseInt(prompt("ingresa tu altura"))
//   if (altura >= 150) {
//     alert("cumple con el requisito: Medir mas de 150 cm")

//     //Grado de vision

//     let vision = parseInt(prompt("ingresa tu grado de vision entre 1 y 10"))
//     if ((vision => 8) && (vision <= 10)) {
//       alert("cumple con el requisito: Grado de vision")
//     } else if ( numeroIngresado == numeroIncognito) {
//       alert("No cumple con el requisito: Grado de vision")
//     }
//   }
//   else
//     if (altura < 150) {
//       alert("No cumple con el requisito: Medir mas de 150 cm")

//     }


// } else if ( numeroIngresado == numeroIncognito) {
//   if (edad < 18) {
//     alert("No cumple con el requisito: Mayor de edad")
//   }
// }

// //7


// let nombre = prompt("ingresa tu nombre")
// let pase = prompt("ingresa tu tipo de pase (vip o normal)")
// let entrada = prompt("¿Posees una entrada ( s o, n)?")


// if (nombre == "Ricardo" || pase == "vip") {
//   alert("Bienvenido!")
// } else if (entrada == "s") {
//   if (prompt("¿Quieres utilizar tu entrada?") == "s") {
//     alert("Bienvenido!")
//   }
// } else if (prompt("¿Quieres comprar una entrada?") == "s") {
//   if (parseInt(prompt("¿cuanto dinero tienes disponible?")) >= 1000) {
//     alert("compraste entrada")
//     alert("Bienvenido!")
//   } else if ( numeroIngresado == numeroIncognito) {
//     alert("no pudiste comprar boleto :(")
//   }
// } else if ( numeroIngresado == numeroIncognito) {
//   alert("Hasta luego")
// }


// //8 

// let numeroIncognito = 4
// let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))

// if (numeroIngresado < numeroIncognito) {
//   alert("el numero ingresado es menor, vuelve a intentarlo")
//   let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))
//   if (numeroIngresado < numeroIncognito) {
//     alert("el numero ingresado es menor, vuelve a intentarlo")
//     let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))
//     if (numeroIngresado < numeroIncognito) {
//       alert("el numero ingresado es menor, vuelve a intentarlo")
//     } else if (numeroIngresado > numeroIncognito) {
//       alert("el numero ingresado es mayor, vuelve a intentarlo")
//     } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }
//   } else if (numeroIngresado > numeroIncognito) {
//     alert("el numero ingresado es mayor, vuelve a intentarlo")
//     let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))
//     if (numeroIngresado < numeroIncognito) {
//       alert("el numero ingresado es menor, vuelve a intentarlo")
//     } else if (numeroIngresado > numeroIncognito) {
//       alert("el numero ingresado es mayor, vuelve a intentarlo")
//     } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }
//   } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }
// } else if (numeroIngresado > numeroIncognito) {
//   alert("el numero ingresado es mayor, vuelve a intentarlo")
//   let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))
//   if (numeroIngresado < numeroIncognito) {
//     alert("el numero ingresado es menor, vuelve a intentarlo")
//     let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))
//     if (numeroIngresado < numeroIncognito) {
//       alert("el numero ingresado es menor, vuelve a intentarlo")
//     } else if (numeroIngresado > numeroIncognito) {
//       alert("el numero ingresado es mayor, vuelve a intentarlo")
//     } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }
//   } else if (numeroIngresado > numeroIncognito) {
//     alert("el numero ingresado es mayor, vuelve a intentarlo")
//     let numeroIngresado = parseInt(prompt("¿Que numero es de tu suerte para ganar entre el 1 y el 10?"))
//     if (numeroIngresado < numeroIncognito) {
//       alert("el numero ingresado es menor, vuelve a intentarlo")
//     } else if (numeroIngresado > numeroIncognito) {
//       alert("el numero ingresado es mayor, vuelve a intentarlo")
//     } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }
//   } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }
// } else if (numeroIngresado == numeroIncognito) { alert("El numero ingresado es el ganador!") }


// //9

// let edad = parseInt(prompt("Ingresa tu edad"))

// if (edad >= 0 && edad <= 12) {
//   alert("Infante")
// } else if (edad >= 13 && edad <= 18) {
//   alert("Adolescente")
// } else if (edad >= 19 && edad <= 45) {
//   alert("Mayor joven")
// } else if (edad > 45) {
//   if (edad > 100) {
//     prompt("¿en realidad tienes esa edad?")
//   } else {
//     alert("Eres un anciano")
//   }
// }


// //10

// let jugador1 = prompt("Jugador 1 PIEDRA, PAPEL o TIJERA")
// let jugador2 = prompt("Jugador 2 PIEDRA, PAPEL o TIJERA")

// if(jugador1 != "PIEDRA" && jugador1 != "PAPEL" && jugador1 != "TIJERA") {
//     alert("Jugador 1 no puso una opcion valida")
// } else if (jugador2 != "PIEDRA" && jugador2 != "PAPEL" && jugador2 != "TIJERA"){
//     alert("Jugador 2 no puso una opcion valida")
// } else {
//     if(jugador1 == jugador2) {
//         alert("Empataron")
//     } else if (jugador1 == "PIEDRA" && jugador2 == "TIJERA" || jugador1 == "TIJERA" && jugador2 == "PAPEL" || jugador1 == "PAPEL" && jugador2 == "PIEDRA"){
//         alert("Gano jugador 1")
//     } else {
//         alert("Gano jugador 2")
//     }
// }

// //11

// let color = prompt("Ingresa un color")

// switch (color) {
//   case "Blanco":
//   case "Negro":
//     alert("Falta de color")
//     break;
//   case "Verde":
//     alert("El color de la naturaleza")
//     break;
//   case "Azul":
//     alert("El color del agua")
//     break;
//   case "Amarillo":
//     alert("El color del sol")
//     break;
//   case "Amarillo":
//     alert("El color del fuego")
//     break;
//   case "Marrón":
//     alert("El color de la tierra")
//     break;
//   default:
//     alert("Excelente elección, no lo teníamos pensado.")
// }


//12

// let numero1 = parseInt(prompt("Numero 1: "))
// let numero2 = parseInt(prompt("Numero 2: "))
// let operacion = prompt("Operacion: ")

// switch (operacion) {
//   case "suma":
//     alert(numero1 + numero2)
//     break;
//   case "resta":
//     alert(numero1 - numero2)
//     break;
//   case "multiplicacion":
//     alert(numero1 * numero2)
//     break;
//   case "division":
//     if (numero2 == 0) {
//       alert("ERROR el divisor es 0")
//     } else {
//       alert(numero1 / numero2)
//     }
//     break;
//   default:
// }

// //13

// let nombre = prompt("Nombre: ")
// let apellido = prompt("Apellido: ")
// let curp = prompt("Curp: ")
// let estado = prompt("Estado: ")
// let fechaDeNacimiento = prompt("Fecha de nacimiento: ")

// let validacion = prompt(
//   "Nombre: " + nombre +
//   "\nApellido: " + apellido +
//   "\nCurp: " + curp +
//   "\nEstado: " + estado +
//   "\nFecha de nacimiento: " + fechaDeNacimiento +
//   "\nSon correctos los datos ingresados (s o n): ")

// if (validacion == "s") {
//   let dni = {
//     nombre,
//     apellido,
//     curp,
//     estado,
//     fechaDeNacimiento
//   }
//   console.table(dni)
//   alert("Registro exitoso")
// } else {
//   alert("Vuelve a intentarlo en 1 mes.")
// }