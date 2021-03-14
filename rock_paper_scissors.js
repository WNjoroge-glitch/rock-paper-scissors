let buttons = document.querySelectorAll("button")
let span = document.querySelector("#score")
let scores = document.querySelector("#score-player-two")
let player_one = document.querySelector('#player-one')
let player_two = document.querySelector('#player-two')
let alert = document.querySelector('#alert')
let round_winner = document.querySelector("#round-winner")
let player_info = document.querySelector(".players")
let round_totals = document.querySelector("#round-totals")
let round_info = document.querySelector(".score")
let player_one_avatar = document.querySelector(".fa-user-circle")
let player_two_avatar = document.querySelector(".fa-user-circle")
let game = document.querySelector(".game")
let btns = document.querySelectorAll(".btn")
let player_body = document.querySelector(".player-body")
let points = document.querySelector("#points")


function getRandomInt(num){
    return Math.floor(Math.random() * Math.floor(num))
    
}

function startGame(){
    // let rounds = 0
    let total = 0
    totals = 0
    totalss = 0
    //let score = [0,0];


    buttons.forEach(button => button.addEventListener("click", function(e){
        total ++
       
        let choices = ["rock","paper","scissors"];
        let score = [0,0];
        let player_one_move = choices[getRandomInt(3)] //computer 
        let player_two_move = button.textContent.toLowerCase()
        player_one.textContent = player_one_move
        player_two.textContent = player_two_move
        
           
            if ((player_one_move === "rock" && player_two_move === "scissors") ||(player_one_move === "paper" && player_two_move === "rock") || (player_one_move === "scissors" && player_two_move === "paper") ){
               score[0] = 1
               totals += score[0]
            //    span.textContent = score[0]
                
                span.textContent = totals
                
                
                
            } else if((player_one_move === "rock" && player_two_move === "paper") || (player_one_move === "paper" && player_two_move === "scissors") || (player_one_move === "scissors" && player_two_move === "rock")){
                score[1] = 1
                totalss += score[1]
                //scores.textContent = score[1]
                
                scores.textContent = totalss
               
                } else {
                score[0]= score[1]=0
                totals += score[0]
                totalss += score [1]
                span.textContent = totals
                scores.textContent = totalss
            }
             
            //let choice = button.textContent
            
}))


}

function gameOver(){
    btns.forEach(btn => btn.addEventListener("click",function(e){
        if(e.target.textContent === "Yes"){
            game.classList.add('rotate')
            startGame()
            
           
          } else {
              player_body.classList.add('animate__animated', 'animate__fadeOut')
              game.classList.add('animate__animated','animate__fadeOut')
              

        }

    }))

}

         let total = 0
         let rounds = 0
         let totals = 0
         let totalss = 0
    
   
         buttons.forEach(button => button.addEventListener("click", function(e){
            total ++
            if(total === 5 ){
                rounds ++
                alert.textContent = `End of round ${rounds}`
                player_info.style.display = "none"
                round_info.style.display = "block"
                
                 total = 0
                
                console.log(rounds)
                score= [0,0]
               
                totals += score[0]
                totalss += score[1]
                
                
               
        
                if(totals > totalss){
               
                 round_winner.textContent = "Player one"
                //  player_one_avatar.style.display = "block"
                 round_totals.textContent = totals
                
                 
                
                }  else if (totals < totalss){
                     round_winner.textContent = "Player Two"
                     points.textContent = [totals,totalss]
                    //  player_two_avatar.style.display = "block"
                    round_totals.textContent = totalss
                    
                    
    
                 } else {
                    //  round_winner.textContent = "A draw"
                     player_two_avatar.style.display = "none"
                     player_one_avatar.style.display = "none"
                 }

                 if(rounds === 3){
                    game.classList.add("win")
                    rounds = 0
                    total = 0
                    // totals = 0
                    // totalss = 0
                    score = [0,0]

                    totals += score[0]
                    totalss += score[1]
                    console.log(`score:${score}`)
                    console.log(`totals:${totals}`)
                    console.log(`totalss:${totalss}`)
                    console.log(`rounds:${rounds}`)
                    console.log(`score:${score}`)
                    console.log(`total:${total}`)
                    gameOver()
                    } else{
                    
                game.className = "game"
                
                }

                 }  else {
                       alert.textContent = ""
                       player_info.style.display = "flex"
                       round_info.style.display = "none"
                      }
               
        }))
    
       
              

    



startGame()
