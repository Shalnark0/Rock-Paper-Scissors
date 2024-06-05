var humanScore = 0
var computerScore = 0

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const score = document.querySelector("#score")

rock.addEventListener("click", ()=>{
    let randomInt = Math.floor(Math.random() * 3)
    let compSelection
    if(randomInt === 0){
        console.log("Rock!")
        compSelection = "Rock"
    }
    if(randomInt === 1){
        console.log("Paper!")
        compSelection = "Paper"
    }
    if(randomInt === 2){
        console.log("Scissors!")
        compSelection = "Scissors"
    }
    if (compSelection === "Rock"){
        console.log("Draw!")
        return}
    if (compSelection === "Scissors")
    {
        console.log("Human won!")
        ++humanScore
    }
    else if(compSelection === "Paper"){
        console.log("Computer won!")
        ++computerScore
        }
    console.log("Human score: "+ humanScore)
    console.log("Computer score: "+ computerScore)
    score.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore
    if (humanScore === 5)
        {alert("The winner.......Human!!")}
    if (computerScore === 5)
        {alert("The winner.......Computer!!")}
})
paper.addEventListener("click", ()=>{
    let randomInt = Math.floor(Math.random() * 3)
    let compSelection
    if(randomInt === 0){
        console.log("Rock!")
        compSelection = "Rock"
    }
    if(randomInt === 1){
        console.log("Paper!")
        compSelection = "Paper"
    }
    if(randomInt === 2){
        console.log("Scissors!")
        compSelection = "Scissors"
    }
    if (compSelection === "Paper"){
        console.log("Draw!")
        return}
    if (compSelection === "Rock")
    {
        console.log("Human won!")
        ++humanScore
    }
    else if(compSelection === "Scissors"){
        console.log("Computer won!")
        ++computerScore
        }
    console.log("Human score: "+ humanScore)
    console.log("Computer score: "+ computerScore)
    score.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore
    if (humanScore === 5)
        {alert("The winner.......Human!!")}
    if (computerScore === 5)
        {alert("The winner.......Computer!!")}
})
scissors.addEventListener("click", ()=>{
    let randomInt = Math.floor(Math.random() * 3)
    let compSelection
    if(randomInt === 0){
        console.log("Rock!")
        compSelection = "Rock"
    }
    if(randomInt === 1){
        console.log("Paper!")
        compSelection = "Paper"
    }
    if(randomInt === 2){
        console.log("Scissors!")
        compSelection = "Scissors"
    }
    if (compSelection === "Scissors"){
        console.log("Draw!")
        return}
    if (compSelection === "Paper")
    {
        console.log("Human won!")
        ++humanScore
    }
    else if(compSelection === "Rock"){
        console.log("Computer won!")
        ++computerScore
        }
    console.log("Human score: "+ humanScore)
    console.log("Computer score: "+ computerScore)
    
    score.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore
    if (humanScore === 5)
        {alert("The winner.......Human!!")}
    if (computerScore === 5)
        {alert("The winner.......Computer!!")}
})
