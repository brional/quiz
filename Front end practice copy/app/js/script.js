//adds event listeners to buttons
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are " + personalityResult

  function getPersonality() {
    let spicyChoice = document.querySelector('input[name="spicy"]:checked');
    // console.log(spicyChoice.id)
    let sundayChoice = document.querySelector('input[name="sunday"]:checked');
    // console.log(sundayChoice.id)
    let condimentChoice = document.querySelector('input[name="condiment"]:checked');
    // console.log(condimentChoice.id)
    let holidayChoice = document.querySelector('input[name="holiday"]:checked');
    // console.log(holidayChoice.id)
    let totalPoints = 0; // 1
    totalPoints = totalPoints + spicyPoints[spicyChoice.id]
    totalPoints = totalPoints + sundayPoints[sundayChoice.id]
    totalPoints = totalPoints + condimentPoints[condimentChoice.id]
    totalPoints = totalPoints + holidayPoints[holidayChoice.id]

    console.log(totalPoints)

    spicyChoice.checked = false;
    sundayChoice.checked = false;
    condimentChoice.checked = false;
    holidayChoice.checked = false;


    if (totalPoints <= 1) {
      return "michelangelo"
    } else if (totalPoints <= 3) {
      return "raphael"
    } else if (totalPoints <= 5) {
      return "donatello"
    } else {
      return Img
    }
  }

}

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = ""

}

//point system
let spicyPoints = {
     basic: 1,
     nandos: 0,
     "green-peppers": 2,
     hot: 0
}

let sundayPoints = {
     boozy: 0,
     pub: 1,
     "sai-daggers": 1,
     netflix: 2
}

let condimentPoints = {
  relish: 2,
  bbq: 1,
  sriacha: 0,
  aioli: 3
}

let holidayPoints = {
  apres: 2,
  city: 1,
  cruise: 0,
  beach: 3
}