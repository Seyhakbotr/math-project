// let time = document.getElementById("current-time");

// setInterval(() => {
//     let d = new Date();
//     time.innerHTML = d.toLocaleTimeString();
// }, 1000);

// let field = document.querySelector('#date');

// // Handle date changes
// date.addEventListener('input', function () {
// 	// ...
// });




let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
    const total = input.valueAsDate / 60;
    document.querySelector(".result").innerHTML = total;
    console.log(total)
})
