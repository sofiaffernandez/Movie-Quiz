"use strict";

let points =0; //empezamos con 0 puntos
let index =0; // indice 0 para ir sumando y avanzando en las preguntas
let jsonData;
let numPregunta=1; // es el indice +1 ya que empieza en array 0
let nombre; // para incluir el nombre para el ranking
const question = document.querySelector("h2#question")
const choices = document.querySelector("div#choices")
let answer1= document.querySelector("#answer1")
let answer2= document.querySelector("#answer2")
let answer3= document.querySelector("#answer3")
let answer4= document.querySelector("#answer4")
let puntuacion = document.querySelector("#puntuacion")
let puntuacionTotal = document.querySelector("#puntuacionTotal")
let ranking = document.querySelector("#ranking")
let correct;


choices.addEventListener("click", (e) =>{
    if (e.target.matches("button")){ //comprobar que se presiona el button y no el div
        let answersPlayer = e.target.innerHTML // definir que button presiona el jugador
        correct = jsonData[index].correct // definir cual es la correcta
        if(answersPlayer === correct){ // si el jugador acierta
            points +=1; //se suma un punto 
            localStorage.setItem("points", JSON.stringify(points)); 
        }
            index++; // tanto si acierta como no se suma uno al índice que recorre las preguntas
            numPregunta++; // igualmente con el contador de preguntas
            document.querySelector ("#progress").innerHTML=`Question ${numPregunta} of ${jsonData.length}`; // enseña el progreso
        if(index < jsonData.length){ //mientras que el indice sea menor que el tamaño del array se recorre el array 
                writeQuestion(jsonData[index])
                writeAnswers(jsonData[index])
                document.querySelector("#puntuacion").innerHTML=`Your score is ${points}`; //se muestra la puntuación actualizada cada vez que se aumenta
            }
            else if(index === jsonData.length ){ // cuando se llegue al final del array de preguntas
                nombre = prompt("Registra tu nombre") //se pide el nombre
                puntuacionTotal.style.display = "inline";
                document.querySelector("#puntuacionTotal").innerHTML=`${nombre}, your score is ${points}`; // se muestra el total obtenido
                //se ocultan las preguntas, respuestas, progreso y puntuación
                choices.style.display = "none";
                puntuacion.style.display = "none";
                question.style.display = "none";
                progress.style.display = "none";
                localStorage.setItem("nombre", JSON.stringify(nombre)); 
                mostrarRanking()
            } 
            
        return;
    }
})
//se crea una función para cargar los datos de JSON
async function loadJSONData (url){
    const response = await fetch(url)
    const data = await response.json()
    return data;
}
//Funcion para las preguntas
function writeQuestion(q){
    question.textContent =q.question;
}
//Funcion para las respuestas
function writeAnswers(a){
    answer1.textContent =a.answers[0];
    answer2.textContent =a.answers[1];
    answer3.textContent =a.answers[2];
    answer4.textContent =a.answers[3];
}
//Función principal que hace funcionar el juego. Alerta si hubo un error de carga 
async function main(){
    try{
        jsonData = await loadJSONData("./quiz.json")
        console.log(jsonData)
        let index = Math.floor(Math.random() * jsonData.length); // se hacen preguntas aleatorias cada vez que recargas la página
        writeQuestion(jsonData[index])
        writeAnswers(jsonData[index])
        correct = jsonData[index].correct
    } catch (error) {
        error = alert("Hubo un error");
    }
}
main()
// function tiempoAtras(){
//     tiemporegresivo = setInterval(() => {
//     let segundos = 30;
//     segundos - 1;
//     let tiempo =document.querySelector("#tiempo")
//     tiempo.innerHTML=`Tiempo restante: ${segundos}`;
//     if (segundos === 0){
//        alert("Se acabó el tiempo")
//        clearInterval(tiemporegresivo)
//     }
// },1000)}

function mostrarRanking(){
 if (!window.localStorage);
 try{
    
    if (localStorage.getItem("ranking") === null) {
        let guardarRanking = [];
        localStorage.setItem("ranking", JSON.stringify(guardarRanking));
    } else {
        guardarRanking = JSON.parse(localStorage.getItem("ranking")); 
    }
    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li"); 
        li.classList.add("nombre"); 
        if (arrayList[i]) {
            li.innerHTML = `${arrayList[i][0]} - ${arrayList[i][1]}`; 
        } else {
            li.innerHTML = "Vacio";
        }

 }}
 catch(error){ 
   error = alert("Hubo un error con el LocalStorage, no se puede cargar el Ranking");
}
}
