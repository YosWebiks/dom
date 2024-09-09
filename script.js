const title = document.createElement("h2")
title.textContent = "blah"
const inp = document.createElement("input")
const inp2 = document.createElement("input")
// inp.type = "range"
// inp.min = 0
// inp.max = 100
// inp.value = 20
// inp.step = 20
// let prev = 20


// inp.addEventListener("change", (e) => {
//     if (inp.value > prev) {
//         title.textContent = inp.value
//         prev = inp.value
//         e.
//     }
// })


document.body.appendChild(title)
document.body.appendChild(inp2)
console.log(title)

inp2.addEventListener("paste", e=> {
    e.preventDefault()
    console.log( e.target == inp2)
    alert("try to be original for once")
})

// arrow
const arr = [true, false, false, true, false, true, true, true]
const arr1 = [5, 7, 7, 5, 7, 5, 5, 5]
console.log(arr1.reduce((a,b)=>a+b, 0))
console.log(arr.filter(b=>b))
console.log(arr.map(b=>!b))

const h1s = document.querySelectorAll(".color-change")

for (const h1 of h1s) {
    h1.addEventListener("click", e=>{
        if (e.ctrlKey) {
            e.target.style.color = "red"
        }else{
            e.target.style.color = "green"
        }
        console.log(e)
    })
}