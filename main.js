// Synchronous Code:
function add (x, y) {
    return x + y
}

let x = 4
let y = 6
// alert("We have paused our JavaScript while waiting for this task to complete.")

let result = add(x, y)

// 1. Register a timeout event. Computer starts watching the time.
// 2. Once the time has elapsed, the callback is added to the task queue
//    to be run the next time the event loop enters the task queue.
// 3. When the event loop enters the task queue, each callback in the queue
//    is executed, and then we return to the normal inner loop.
const timerIdA = window.setInterval(() => console.log("Timer A"), 1_000)
window.clearInterval(timerIdA)

window.setTimeout(() => console.log("Timer D"), 5_000)
window.setTimeout(() => console.log("Timer C"), 5)
window.setTimeout(() => console.log("Timer B"), 1_001)
window.setTimeout(() => console.log("Timer E"), 0)
window.setTimeout(() => console.log("Timer F"), 0)
window.setTimeout(() => console.log("Timer G"), 0)
console.log("Control")

const randomNumberBetween1and10Exclusively = () => Math.floor(Math.random() * 10)

function loopManyTimes (callback) {
    let count = 0
    for (let index = 0; index < 100_000_000; index += 1) {
        count += callback()
    }
    return count
}

const bigCount = loopManyTimes(randomNumberBetween1and10Exclusively)
console.log({ "synchronous big count": bigCount})

window.setTimeout(() => {
    const bigCount = loopManyTimes(randomNumberBetween1and10Exclusively)
    console.log({ "asynchronous big count": bigCount})
}, 0)


function printCatFacts (catFactObjects) {
    const catFactStrings = catFactObjects.map(catFactObject => catFactObject.text) // array
    console.log(catFactObjects)
    console.log(catFactStrings)
    document.body.append(...catFactStrings) // spread operator
}

fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => response.json())
    .then(data => printCatFacts(data))

