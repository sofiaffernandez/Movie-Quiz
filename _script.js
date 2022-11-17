"use strict";
// Inicio juego

// Se muestra la primera pregunta. 
    // Hay que importar el JSON.
 async function recuperarJSON (){
        const respuesta = await fetch("/quiz.json");
        if (respuesta.ok) {
            const datos = await respuesta.json();
            console.log(datos)
        } else{
            console.error("hubo un error con el JSON")
        }
    
    }
    
    // Variable con el JSON
    let variableJSON = recuperarJSON ()
    // Variable pregunta
    let question = JSON.parse.question;
    // Variable respuestasPosibles
    let answers = JSON.parse.answer;
    // Variable correcta
    let correctAnswers = JSON.parse.correct;
    // Variable respuestaJugador 
    let playerAnswer = []
    // Variable puntos
    let puntos = []
    // Mostrar en pantalla las preguntas
        if (question < variableJSON.length ) {
             document.querySelector("#question").innerHTML = "<h2>" + question + "</h2>";
                for(let i = 0; x = opciones.length, i < x ; i++){
                    document.querySelector("#choices").innerHTML = "<div id=choices> <button style=--clr: #26a9bb class=button id=answer1>" + answer + "</button><button style=--clr: #26a9bb class=button id=answer2>" + answer + "</button> <button style=--clr: #26a9bb class=button id=answer3></button>" + answer + " <button style=--clr: #26a9bb class=button id=answer4>" + answer + "</button> </div>
                };
        
        // Se hace click en una. Deshabilitar botton para que no se envie, sino que hay que comparar la respuesta correcta con la respuestaJugador;
            // Si es verdadera;
                // Se suma un punto
                for(x in variableJSON){
                    if(playerAnswer[x] == variableJSON[x].answers){
                    	puntos += 1;
                    }
                }
        // función progreso
        document.querySelector("#progress").innerHTML = "<p> `Question ${i} of ${x}` </p>";
        }
            // Si es falsa;
                // Nada
        // Pasa a la siguiente pregunta. Bucle anterior con duración de 50, json.lenght
       
// Acaba el bucle anterior;
    // Se muestran los puntos totales. Ya se han ido sumando durante el bucle.
    // Añadir nombre. Guardar en una variable para usarlo en el ranking
    else if(question === JSON.length ){
        let nombre = prompt("Registra Tu nombre");
            function plural(puntos) { 
                return puntos !== 1 ? "s" : "";
            }  
         document.querySelector("#choices").innerHTML  = `${nombre} has obtenido ${puntos} punto ${plural}`;
    };

    // Se muestra el ranking. Extraer data de LocalStorage y ordenar estos datos. 
    let puntosLocal = JSON.parse(localStorage.getItem("nombre, puntos"));
    puntosLocal.sort((a, b) => (a.puntos < b.puntos ? 1 : -1));
    document.querySelector("#choices").innerHTML = `${nombre} - ${puntos} punto ${plural}`;
    

       // let choice = jsonData.choices;
    // console.log(choice)
    
    //  choices.map (currentA => "<button style=--clr: #26a9bb class= button > " + currentA + "</button>")
    // choices.textContent = a.choices;
    // console.log (choices)
       // correctAnswer.textContent = c.correct;
    // correct.textContent = c.correct;
    // console.log(correct)

    // function answer1 (a){
// choices.textcontent = a.answers[0]
// console.log(a.answers[0])
// }
// function answer2 (a){
// choices.textcontent = a.answers[1]
// }
// function answer3 (a){
// choices.textcontent = a.answers[2]
// }
// function answer4 (a){
//     choices.textcontent = a.answers[3]
// }
    
for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }
  let puntosLocal = localStorage.getItem("nombre, points");
                puntosLocal.sort((a, b) => (a.puntos < b.puntos ? 1 : -1));
                document.querySelector("#ranking").innerHTML=`${} `;