let homeScore = document.getElementById("h-scr")
let guestScore = document.getElementById("g-scr")
let countHome =0
let countGuest =0

function incrementHomeOne() {
     countHome += 1
     homeScore.textContent = countHome 
}

function incrementHomeTwo() {
     countHome += 2
     homeScore.textContent = countHome 
}

function incrementHomeThree() {
     countHome += 3
     homeScore.textContent = countHome
}

function incrementGuestOne() {
     countGuest += 1
     guestScore.textContent = countGuest
}

function incrementGuestTwo() {
     countGuest += 2
     guestScore.textContent = countGuest
}

function incrementGuestThree() {
     countGuest += 3
     guestScore.textContent = countGuest 
}

function decrementHome() { 
      countHome -= 1
      homeScore.textContent = countHome
}


function decrementGuest() {
      countGuest -= 1
      guestScore.textContent = countGuest
}

function resetHome() {
     countHome = 0
     homeScore.textContent = countHome
}

function resetGuest() {
     countGuest = 0
     guestScore.textContent = countGuest
}








