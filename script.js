"use strict";
console.log("funciona")
let points =0;
let index =0;
let jsonData;
const question = document.querySelector("h2#question")
const choices = document.querySelector("div#choices")
let answer1= document.querySelector("#answer1")
let answer2= document.querySelector("#answer2")
let answer3= document.querySelector("#answer3")
let answer4= document.querySelector("#answer4")

function plural(puntos) { 
    return puntos !== 1 ? "s" : "";
}  
choices.addEventListener("click", (e) =>{
    if (e.target.matches("button")){
        e.preventDefault()
        let answersPlayer = e.target.innerHTML
            if(answersPlayer === jsonData.correct){
                points +=1;
            }
            index ++;
            if(index < jsonData.lenght){
                writeQuestion(jsonData[index])
                writeAnswers(jsonData[index])
                document.querySelector("#ranking").innerHTML=`Your score is ${points}`;
                document.querySelector ("#progress").innerHTML=`Question ${index} of ${jsonData.lenght}`;
            }
            else if(index --- jsonData.length ){
                let nombre = prompt ("Registra tu nombre");
                document.querySelector("#puntos").innerHTML=`${nombre} has obtenido ${points} ${plural}`;
        } 
    }
})
async function loadJSONData (url){
    const response =await fetch (url)
    const data =await response.json()
    return data;
}
function writeQuestion(question){
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
        jsonData= await loadJSONData("/quiz.json")
        console.log(jsonData)
        writeQuestion(jsonData[index])
        writeAnswers(jsonData[index])
    } catch (error) {
        console.error("hubo un error", error.message);
    }
}
main()