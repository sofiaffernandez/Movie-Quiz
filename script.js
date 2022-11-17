"use strict";

let points =0; //empezamos con 0 puntos
let index =0; // indice 0 para ir sumando y avanzando en las preguntas
let jsonData;
let numPregunta=1;
let nombre; 
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
    if (e.target.matches("button")){
        let answersPlayer = e.target.innerHTML
        correct = jsonData[index].correct
        if(answersPlayer === correct){
            points +=1;
            localStorage.setItem("points", points);
        }
            index++;
            numPregunta++;
            document.querySelector ("#progress").innerHTML=`Question ${numPregunta} of ${jsonData.length}`;
        if(index < jsonData.length){
                writeQuestion(jsonData[index])
                writeAnswers(jsonData[index])
                document.querySelector("#puntuacion").innerHTML=`Your score is ${points}`;
            }
            else if(index === jsonData.length ){
                nombre = prompt("Registra tu nombre")
                puntuacionTotal.style.display = "inline";
                document.querySelector("#puntuacionTotal").innerHTML=`${nombre}, your score is ${points}`;
                tiempo.style.display = "none";
                choices.style.display = "none";
                puntuacion.style.display = "none";
                question.style.display = "none";
                progress.style.display = "none";
                localStorage.setItem("nombre", nombre);
            } 
            
        return;
    }
})

async function loadJSONData (url){
    const response = await fetch(url)
    const data = await response.json()
    return data;
}
function writeQuestion(q){
    question.textContent =q.question;
}
function writeAnswers(a){
    answer1.textContent =a.answers[0];
    answer2.textContent =a.answers[1];
    answer3.textContent =a.answers[2];
    answer4.textContent =a.answers[3];
}
async function main(){
    try{
        jsonData = await loadJSONData("./quiz.json")
        console.log(jsonData)
        let index = Math.floor(Math.random() * jsonData.length);
            //  jsonData.splice(index, 1);
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

// function mostrarRanking(){
//  if (!window.localStorage);
//  try{
    
//     if (localStorage.getItem("ranking") === null) {
//         let guardarRanking = [];
//         localStorage.setItem("ranking", JSON.stringify(guardarRanking));
//         localStorage.setItem("nombre", nombre); 
//         localStorage.setItem("points", points);
//     } else {
//         rankingLevel1 = JSON.parse(localStorage.getItem("ranking")); 
//     }
//     for (let i = 0; i < 5; i++) {
//         const li = document.createElement("li"); 
//         li.classList.add("person"); 
//         if (arrayList[i]) {
//             li.innerHTML = `${arrayList[i][0]} - ${arrayList[i][1]}`; 
//         } else {
//             li.innerHTML = "Vacio";
//         }
    
//     // localStorage.setItem("nombre", nombre);
//     // localStorage.setItem("points", points);
//     // localStorage.getItem("nombre", nombre);
//     // localStorage.getItem("points", puntos);
//     puntosLocal.sort((a, b) => (a.points < b.points ? 1 : -1));
//     puntosLocal.slice(5)
//     document.querySelector("#listaRanking").innerHTML=`<li id=listaRanking =>${nombre.nombre} - ${points.points}</li>;`;
   
//  }}
//  catch(error){ 
//    error = alert("Hubo un error con el LocalStorage, no se puede cargar el Ranking");
// }
// }
