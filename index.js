const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("passwordGeneratorForm")
let passwordDisplay1 = document.getElementById("password-display1")
let passwordDisplay2 = document.getElementById("password-display2")

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

form.addEventListener("submit" , e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const password = generatePassword(characterAmount)
})

function getRandomCharacters() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePassword(characterAmount)
 {

    let randomPassword1 = ""
    for (let i = 0; i < characterAmount; i++) {
        randomPassword1 += getRandomCharacters()
    }
    
    passwordDisplay1.textContent = randomPassword1

    let randomPassword2 = ""
    for (let i = 0; i < characterAmount; i++) {
        randomPassword2 += getRandomCharacters()
    }
    
    passwordDisplay2.textContent = randomPassword2
}


    
