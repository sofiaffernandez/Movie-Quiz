// Inicio juego
// Añadir nombre. Guardar en una variable para usarlo en el ranking

// Se muestra la primera pregunta. 
    // Hay que importar el JSON.
    // Variable pregunta
    // Variable respuestasPosibles
    // Variable correcta
    // Variable respuestaJugador 
    // Variable puntos
        // Se hace click en una. Deshabilitar botton para que no se envie, sino que hay que comparar la respuesta correcta con la respuestaJugador;
            // Si es verdadera;
                // Se suma un punto
            // Si es falsa;
                // Nada
        // Pasa a la siguiente pregunta. Bucle anterior con duración de 50, json.lenght
// Acaba el bucle anterior;
    // Se muestran los puntos totales. Ya se han ido sumando durante el bucle.
    // Se muestra el ranking. Extraer data de LocalStorage y ordenar estos datos. 


    // function juego (){
// Añadir nombre para el ranking //Inicio juego;
let nombre = prompt ("Escribe tu nombre")

// trabajar con JSON dado
async function recuperarJSON (){
    const respuesta = await fetch("/quiz.json");
    if (respuesta.ok) {
        const datos = await respuesta.json();
        document.querySelector("question").innerHTML = respuesta.question
    } else{
        console.error("hubo un error con el JSON")
    }
}
recuperarJSON()
console.log(JSON.parse.recuperarJSON)
// let question = JSON.parse(recuperarJSON(JSON.parse.question));
// console.log(question)
// let answer= JSON.parse.answer;
// console.log(answer)
// let correct = JSON.parse.correct;
// console.log(correct)

// let quizJSON= await fetch("./quiz.json") 
// console.log(quizJSON)
// let quiz = JSON.parse(quizJSON);  
// let question = JSON.parse.question;
// let answer= JSON.parse.answer;
// let correct = JSON.parse.correct;




// let answerJugador = [];
// // Crear variable puntos para ir acumulando
// let puntos = [] 
// for(const question of quizJSON){
//         if(let i=0; i <= quizJSON.lenght; i++){
//             if (answerJugador === answer){
//                 puntos +=1;
//             // siguiente pregunta
//             }
//             else (answerJugador != answer){
//             // siguiente pregunta
//             }
//         }
//         // Cuando se acaben las 50 preguntas
//         // Suma los puntos
//         else {
//             function plural(puntos) { 
//                 return puntos !== 1 ? "s" : "";
//             }  
//             console.log (`${nombre} has obtenido ${puntos} punto ${plural}`);
    
//         }
        
//         // Muestra el ranking

//         let puntosLocal = JSON.parse(localStorage.getItem("puntos"));
//         puntosLocal.sort((a, b) => (a.puntos < b.puntos ? 1 : -1));
//         console.log (`${nombre} - ${puntos} punto ${plural}`);
//     }
// }

// juego ()

// function progreso (){
//     document.getElementById()
// }

// answerJugador.forEach((answer, index) => {
//     if (answer === correctAnswers[index]) {
//       puntos += 1;
//     }
//   });

// window.onload = juego ()

// // Cancelar evento botton al hacer click
// let cancelarButton = async (e) => {
//     e.preventDefault ()
// }
// form.addEventListener("submit", cancelarButton)

// let Quiz = (function(){
// 	let contador = 0;
// 	let puntaje = 0;
// 	let answers = [];
// 	let preguntas = [
//         async function recuperarJSON (){
//             const respuesta = await fetch("/quiz.json");
//             if (respuesta.ok) {
//                 const datos = await respuesta.json();
//                 console.log(datos)
//             } else{
//                 console.error("hubo un error con el JSON")
//             }
//         }
//     ]
// 	return {
// 		getCounter: function(){
// 			return contador;
// 		},
// 		setCounter	: function(){
// 			return counter++;
// 		},
// 		getQuestion : function(question){
// 			return  preguntas[question].pregunta;
// 		},
// 		getOptions: function(question){
// 			return  preguntas[question].opciones;
// 		},
// 		getPuntaje : function(){
// 			for(x in preguntas){
// 				if(respuestas[x] == preguntas[x].respuesta){
// 					puntaje += 1;
// 				}
//             };
// 				return puntaje;
// 		},
// 		setRespuestas: function(answer){
// 				answers.push(answer);
// 		},
// 		getRespuestas: function(){
// 				return answers;
// 		},

// 	} 		
// 	})();
  
// document.querySelector("body").innerHTML = cargarSection
    
// function cargarSection(pregunta){
//     if( pregunta <  ( Quiz.length() ) ){
//  	let question = Quiz.getQuestion(pregunta); 	
// 	 	let opciones = Quiz.getOptions(pregunta);
//         document.querySelector("#question").innerHTML = "<h2>" + question + "</h2>";
// 		for(var i = 0, x = opciones.length; i < x ; i++){
// 			document.querySelector("#choices").innerHTML = "<p class=\"button\" id=\" " + i  +  " \"> <span class=\"choicesN + " +  i + " \"> "  + opciones[i] + "</span></p>";
// 			};

// 	}else if(pregunta  == ( Quiz.getCantidad()  )){
// 		let nombre = prompt("Registra Tu nombre");
// 		let puntos = Quiz.getPuntaje();
//         function plural(puntos) { 
//             return puntos !== 1 ? "s" : "";
//             }  
//  		document.querySelector("#question").innerHTML  = `${nombre} has obtenido ${puntos} punto ${plural}`;

//  	};

// document.querySelector(".respuesta").on("click",responder);

//  }

//  function responder(){
//  	let pregunta = Quiz.setCounter();
//  	let respuesta = $(this).attr("id");
//  		Quiz.setRespuestas(respuesta);
//  		cargarSection(++pregunta);
 		
//  };

// document.querySelector("body").innerHTML = (nombre ())
// function nombre (){
//     document.querySelector("body").innerHTML = " <p>Introduce tu nombre: <input type=text name=nombre/></p><input type=submit value=Siguiente>"
    
//     let cancelarForm = async (e) => {
//         e.preventDefault ()
//     }
//     form.addEventListener("submit", cancelarForm)
// }
//  if (!window.localStorage);
//  try{
    
//     if (localStorage.getItem("ranking") === null) {
//         let guardarRanking = [];
//         localStorage.setItem("ranking", JSON.stringify(guardarRanking));
//     } else {
//         guardarRanking = JSON.parse(localStorage.getItem("ranking")); 
//     }
//     for (let i = 0; i < 5; i++) {
//         const li = document.createElement("li"); 
//         li.classList.add("nombre"); 
//         if (arrayList[i]) {
//             li.innerHTML = `${arrayList[i][0]} - ${arrayList[i][1]}`; 
//         } else {
//             li.innerHTML = "Vacio";
//         }

//  }}
//  catch(error){ 
//    error = alert("Hubo un error con el LocalStorage, no se puede cargar el Ranking");
// }
// }
