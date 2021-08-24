let firstCard = 10
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false 
let isAlive = true;
let message = ""
let count = 0
let cards = []
cards.push(firstCard)
cards.push(secondCard)

// or document.getElementById("sum-el")

let SumEl = document.querySelector("#sum-el") 
let CardsEl = document.getElementById("cards-el");

let SumMessage = "Sum: "
let CardMessage = "Cards: "

function startGame(){
    renderGame()
}
function renderGame(){
    if (sum <=20){
        message = "Do you want to draw a new card?"
        document.getElementById("message-btn").textContent = message
        SumEl.textContent = SumMessage + sum
        CardsEl.textContent = CardMessage + firstCard + " " + secondCard

    } else if (sum === 21){
        message = "Wohoo! You've got BlackJack!"
        document.getElementById("message-btn").textContent = message
        hasBlackJack = true
        SumEl.textContent = SumMessage + sum
        CardsEl.textContent = CardMessage + firstCard + " " + secondCard

    } else{
        message = "You're out of the game!"
        document.getElementById("message-btn").textContent = message
        isAlive = false
        SumEl.textContent = SumMessage + sum
        CardsEl.textContent = CardMessage + firstCard + " " + secondCard


    }
}

function newCard(){
    let value3 = Math.floor(Math.random() * 10);
    click_card = " " + value3
    
    sum += value3
    document.getElementById("cards-el").textContent += click_card
    document.getElementById("sum-el").textContent = sum    
    
    if (sum > 21){
        sum = (firstCard + secondCard)
        initiaL_sum = "Initial Sum" + sum
        startGame()
    }
}