// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */
function displayNewPassword () {
  let criteria = getCriteria()
  let password = generatePassword(criteria)
  let passwordText = document.getElementById('password')
  passwordText.value = password
}

/* Your solution code goes here ... */



// Generate ASCII to arrays
const LOWER_ALPHA = []
for (let i = 97; i < 123; i++) {
  LOWER_ALPHA.push(String.fromCharCode(i))
}

const UPPER_ALPHA = []
for (let i = 65; i < 91; i++) {
  UPPER_ALPHA.push(String.fromCharCode(i))
}

const NUMBERS = []
for (let i = 48; i < 58; i++) {
  NUMBERS.push(String.fromCharCode(i))
}

const SPECIAL_CHAR = []
for (let i = 33; i < 48; i++) {
  SPECIAL_CHAR.push(String.fromCharCode(i))
}
for (let i = 58; i < 65; i++) {
  SPECIAL_CHAR.push(String.fromCharCode(i))
}
for (let i = 91; i < 97; i++) {
  SPECIAL_CHAR.push(String.fromCharCode(i))
}

// Get user input 
function getCriteria () {
 let passLength
  do {
    const passCharacters = prompt('How long would you like your password to be? (8-128)')   
    try {
      passLength = parseInt(passCharacters)
    } catch (e) {}
  } while (isNaN(passLength) || 8 > passLength || 128 < passLength)
  
  const lowercase = confirm('Do you want to include lowercase characters?')
  const uppercase = confirm('How about uppercase characters?')
  const numerics = confirm('Do you want to include numbers?')
  const symbols = confirm('And what about special characters?')
  return {
    length: passLength,
    lowercase,
    uppercase,
    numerics,
    symbols,
  }
}

function generatePassword (criteria) {
  let password = ''
  const REQS = []
  criteria.lowercase && REQS.push(LOWER_ALPHA)
  criteria.uppercase && REQS.push(UPPER_ALPHA)
  criteria.numerics && REQS.push(NUMBERS)
  criteria.symbols && REQS.push(SPECIAL_CHAR)
  for (let i = 0; i < criteria.length; i++) {
    const temp = Math.floor(Math.random() * REQS.length)
    const LENGTH = REQS[temp].length
    const temp2 = Math.floor(Math.random() * LENGTH)
    const temp3 = REQS[temp][temp2]
    password += temp3
  }
  return password
}

