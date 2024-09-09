// find the element
const qube = document.querySelector(".qube")
let left = 1
let ttop = 1
// add event
document.body.addEventListener("keydown", e => {
    console.log(e.keyCode)

    switch (e.keyCode) {
        case 37:
            if (left > 0) {
                left -= 1
            }
            break;
        case 38:
            if (ttop > 0) {
                ttop -= 1
            }
            break;
        case 39:
            if (left + 130 < window.innerWidth) {
                left += 1
            }
            break;
        case 40:
            if (ttop + 130 <  window.innerHeight) {
                ttop += 1
            }
            break;

        default:
            break;
    }
    qube.style.left = left + "px"
    qube.style.top = ttop + "px"
})
// detect arrow keys

// play with top ansd left properties

const arr = [
    {name: "jo", grade: 70},
    {name: "joh", grade: 67},
    {name: "john", grade: 60},
    {name: "johnn", grade: 78},
    {name: "johnny", grade: 53},
]
