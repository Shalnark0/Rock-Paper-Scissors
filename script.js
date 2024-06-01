function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
          function getComputerChoice(randomInt){
              let compChoice 
              if(randomInt === 0){
                  console.log("Rock!")
                  compChoice = "Rock"
              }
              if(randomInt === 1){
                  console.log("Paper!")
                  compChoice = "Paper"
              }
              if(randomInt === 2){
                  console.log("Scissors!")
                  compChoice = "Scissors"
              }
              return compChoice
          }
  
          var humanScore = 0
          var computerScore = 0
  
          function getHumanChoice(){
              let humanChoice            
              humanChoice = prompt("Please make a choice(Rock, Paper or Scissors): ")
              return humanChoice
          }
          
          var humanSelection = getHumanChoice()
          var compSelection = getComputerChoice(getRandomInt(3))
          
          function playAround(humanSelection, compSelection){
                      if (humanSelection === compSelection){
                          console.log("Draw!")
                          return
                      }
                      if (humanSelection === "Scissors" && compSelection ==="Paper" || humanSelection === "Paper" && compSelection === "Rock" || humanSelection === "Rock" && compSelection === "Scissors")
                      {
                          console.log("Human won!")
                          ++humanScore
                      }
                      else{
                          console.log("Computer won!")
                          ++computerScore
                      }
                      console.log("Human score: "+ humanScore)
                      console.log("Computer score: "+ computerScore)
                  }
                  
          playAround(humanSelection, compSelection)         
          var humanSelection = getHumanChoice()
          var compSelection = getComputerChoice(getRandomInt(3))       
          playAround(humanSelection, compSelection)
          var humanSelection = getHumanChoice()
          var compSelection = getComputerChoice(getRandomInt(3))        
          playAround(humanSelection, compSelection)
          var humanSelection = getHumanChoice()
          var compSelection = getComputerChoice(getRandomInt(3))        
          playAround(humanSelection, compSelection)
          var humanSelection = getHumanChoice()
          var compSelection = getComputerChoice(getRandomInt(3))        
          playAround(humanSelection, compSelection)