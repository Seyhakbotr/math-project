

let u;
let o;
function handleChange(input) {
        if (input.value < 1) input.value = 1;
        if (input.value > 31) input.value = 31;
      }
function calcDay()
{   
        // let u = (2*3.14*(x-172)/365);
        //   o = 38.27 * (Math.cos(u)) + 727.55;
        //     x = parseFloat(o).toFixed(2);
        let day = document.getElementById("days").value;
        let month = document.getElementById("months").value;
        let getMonth = month * 30.417;
        let total = day + getMonth;
        let u = (2*3.14*(total-172)/365);
          o = 38.27 * (Math.cos(u)) + 727.55;
            total = parseFloat(o).toFixed(2);

        
        document.getElementById("result").innerHTML = total + " Minutes ";
}

// let o;
// function myFunction(o) {

//   var day = document.getElementById("myText").value;
// var month = document.getElementById("myText").value;
//     getMonth = month * 30.417;
//      total = day + getMonth
//   let u = (2*3.14*(total-172)/365);
//   o = 38.27 * (Math.cos(u)) + 727.55;
//     x = parseFloat(o).toFixed(2);
//   document.getElementById("demo").innerHTML = x;
// }

