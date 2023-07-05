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




let o;
function myFunction(o) {

  var x = document.getElementById("myText").value;
  let u = (2*3.14*(x-172)/365);
  o = 38.27 * (Math.cos(u)) + 727.55;
    x = parseFloat(o).toFixed(2);
  document.getElementById("demo").innerHTML = x;
}

