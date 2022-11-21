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
        
            index++;// tanto si acierta como no se suma uno al índice que recorre las preguntas
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
                mostrarRanking(points)
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
        //Sacar las preguntas en aleatorio sin repetir;
            let index;
            let j;
            let k;
            for (index = jsonData.length; index; index--) {
                j = Math.floor(Math.random() * index);
                k = jsonData[index - 1];
                jsonData[index - 1] = jsonData[j];
                jsonData[j] = k;
            }

        writeQuestion(jsonData[index])
        writeAnswers(jsonData[index])
        correct = jsonData[index].correct
        
    } catch (error) {
        error = alert("Hubo un error");
    }
}
main()

function mostrarRanking(points){
    if(points > 0 & points <=10)
    ranking.innerHTML=`<br><img src=gifs/stormtrooper.gif alt=stormtrooper StarWars height=150 aling=middle> <h2  > Un Stormtrooper tiene más puntuería que tú </h2> `;
    if(points > 11 & points <=20)
    ranking.innerHTML=`<br><img src=gifs/leonardo-dicaprio.gif alt=DiCaprio Enfadado height=150 aling=middle> <h2 > Has decepcionado a DiCaprio </h2> `;
    if(points > 21 & points <=30)
    ranking.innerHTML=`<br><img src=gifs/et.gif alt=et disfrazado height=150 aling=middle> <h2 > Aprobado raspado </h2> `;
    if(points > 31 & points <=40)
    ranking.innerHTML=`<br><img src=gifs/magodeoz.gif alt=et disfrazado height=150 aling=middle> <h2 > Sigue por ese camino </h2> `;
    if(points > 41 & points <50)
    ranking.innerHTML=`<br><img src=gifs/backtothefuture.gif alt=backtothefuture disfrazado height=150 aling=middle> <h2  > No te lo crees ni tú </h2> `;
    if(points === 50)
    ranking.innerHTML=`<br><img src=gifs/tarantino.gif alt=et disfrazado height=150 aling=middle> <h2> Enhorabuena, te gusta más el cine que a Tarantino los pies </h2> `;

}
