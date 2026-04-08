let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0

// incement function
function increment(){
    count += 1
    countEl.innerText = count
}

// save function
function save(){
    let elSaved = " " + count + " - "
    saveEl.textContent += elSaved
    count = 0
    countEl.innerText = 0
}