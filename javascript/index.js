


let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


console.log(countEl);
console.log(saveEL);
console.log(minusEL);


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let saving = count + " - "
    saveEL.textContent += saving
    count = 0
    countEl.textContent = 0
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
