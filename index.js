
function calcSvayRieng()
{   
        // let u = (2*3.14*(x-172)/365);
        //   o = 38.27 * (Math.cos(u)) + 727.55;
        //     x = parseFloat(o).toFixed(2);
         day = document.getElementById("days").value;
         month = document.getElementById("months").value;
         year = document.getElementById("years").value;
         getMonth = month * 30.417;
         total = day + getMonth;
         u = (2*3.14*(total-104)/365);
          o = 39.2 * (Math.cos(u)) + 727.6;
            total = parseFloat(o).toFixed(2);
         if (month > 12 || month < 0){
          document.getElementById("result").innerHTML = "Month too high or too low";
         } else if (month == 2 && day >= 29){
          document.getElementById("result").innerHTML = "February has only 28 days";
         }else if (day > 31 || day < 0){
            document.getElementById("result").innerHTML = "Day is too high or too low";
         } else if(day == 0 && month == 0){
            document.getElementById("result").innerHTML = "No input";
         }else if (year >= 3000 || year < 0 ){
          document.getElementById("result").innerHTML = "Years too high or too low."; 
         
           }else{
            document.getElementById("result").innerHTML = total + " Minutes ";
          }
      
}
function calcDayBanteay(){
    day = document.getElementById("days").value;
    month = document.getElementById("months").value;
    getMonth = month * 30.417;
    total = day + getMonth;
    u = (2*3.14*(total-172)/365);
    o = 48.65 * (Math.cos(u)) + 727.65;
    total = parseFloat(o).toFixed(2);
    if (month > 12 || month < 0){
      document.getElementById("result").innerHTML = "Month too high or too low";
     } else if (month == 2 && day >= 29){
      document.getElementById("result").innerHTML = "February has only 28 days";
     }else if (day > 31 || day < 0){
        document.getElementById("result").innerHTML = "Day is too high or too low";
     } else if(day == 0 && month == 0){
        document.getElementById("result").innerHTML = "No input";
     }else if (year >= 3000 || year < 0 ){
      document.getElementById("result").innerHTML = "Years too high or too low."; 
     
       }else{
        document.getElementById("result").innerHTML = total + " Minutes ";
      }
   
}
function calcDayLaos() {
 day = document.getElementById("days").value;
 month = document.getElementById("months").value;
 getMonth = month * 30.417;
  total = day + getMonth;
 u = (2*3.14*(total-172)/365);

    o = 69.7 * (Math.cos(u)) + 732.9;
      total = parseFloat(o).toFixed(2);
      if (month > 12 || month < 0){
        document.getElementById("result").innerHTML = "Month too high or too low";
       } else if (month == 2 && day >= 29){
        document.getElementById("result").innerHTML = "February has only 28 days";
       }else if (day > 31 || day < 0){
          document.getElementById("result").innerHTML = "Day is too high or too low";
       } else if(day == 0 && month == 0){
          document.getElementById("result").innerHTML = "No input";
       }else if (year >= 3000 || year < 0 ){
        document.getElementById("result").innerHTML = "Years too high or too low."; 
       
         }else{
          document.getElementById("result").innerHTML = total + " Minutes ";
        }
     
     
}