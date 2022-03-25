
let inputEl = document.getElementById("input-box")
let resEl1 = document.getElementById("result-1")
let resEl2 = document.getElementById("result-2")
let resEl3 = document.getElementById("result-3")
let resEl4 = document.getElementById("result-4")
let results_box = [resEl1, resEl2, resEl3, resEl4]
let length = 0

// resEl3.textContent = "okk"

function generatePasswords() {
    length = parseInt(inputEl.value)
    // let number = getRandomNumber()
    // results_box[0].textContent = number

    for(let i = 0; i < 4; i++){
        let password = ""
        for(let j = 0; j < length; j++){
            password += String.fromCharCode(getRandomNumber())
        }
        results_box[i].textContent = password
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 93) + 33
}
