
function calcSvayRieng()
{   
         day = document.getElementById("days").value;
         month = document.getElementById("months").value;
         year = document.getElementById("years").value;
         getMonth = month * 30.417;
         total = day + getMonth;
         u = (2*3.14*(total-172)/365);
          o = 39.2 * (Math.cos(u)) + 727.6;
            total = parseFloat(o).toFixed(2);
            hour = parseFloat(total/60).toFixed(2);
         if (month > 12 || month < 0){
          document.getElementById("result").innerHTML = "Month too high or too low";
         } else if (month == 2 && day > 28){
          document.getElementById("result").innerHTML = "February has only 28 days";
         }else if ( day < 0){
            document.getElementById("result").innerHTML = "Day is too low";
         } else if(day == 0 && month == 0){
            document.getElementById("result").innerHTML = "No input";
         }else if (year >= 3000 || year < 0 ){
          document.getElementById("result").innerHTML = "Years too high or too low."; 
         }else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8  || month == 10 
                  || month == 12){
                     if (day > 31){
                        document.getElementById("result").innerHTML = "Day is too high"; 
                     } else{
                        document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
                     }
         } else if (month == 4 || month == 6 || month == 9 || month == 11){
            if (day > 30){
               document.getElementById("result").innerHTML = "Day is too high"; 
         } else {
            document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
            
         }
      }
           else{
            document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
          }
    
         
         // if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
         //    if (month == 2 && day > 29){
         //       document.getElementById("result").innerHTML = "Leap month has only 29 days";

         //    } else {
         //       getMonth2 = month * 28.4;
         //       total = day + getMonth;
         //       document.getElementById("result").innerHTML = total + " Minutes ";
         //    }
         // }
      
}
function calcDayBanteay(){
   day = document.getElementById("days").value;
   month = document.getElementById("months").value;
   year = document.getElementById("years").value;
   getMonth = month * 30.417;
   total = day + getMonth;
   u = (2*3.14*(total-172)/365);
   o = 48.65 * (Math.cos(u)) + 727.65;
   total = parseFloat(o).toFixed(2);
   hour = parseFloat(total/60).toFixed(2);
         if (month > 12 || month < 0){
          document.getElementById("result").innerHTML = "Month too high or too low";
         } else if (month == 2 && day > 28){
          document.getElementById("result").innerHTML = "February has only 28 days";
         }else if ( day < 0){
            document.getElementById("result").innerHTML = "Day is too low";
         } else if(day == 0 && month == 0){
            document.getElementById("result").innerHTML = "No input";
         }else if (year >= 3000 || year < 0 ){
          document.getElementById("result").innerHTML = "Years too high or too low."; 
         }else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8  || month == 10 
                  || month == 12){
                     if (day > 31){
                        document.getElementById("result").innerHTML = "Day is too high"; 
                     } else{
                        document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
                     }
         } else if (month == 4 || month == 6 || month == 9 || month == 11){
            if (day > 30){
               document.getElementById("result").innerHTML = "Day is too high"; 
         } else {
            document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
            
         }
      }
           else{
            document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
          }
    
}
function calcDayLaos() {
   day = document.getElementById("days").value;
   month = document.getElementById("months").value;
   year = document.getElementById("years").value;
   getMonth = month * 30.417;
   total = day + getMonth;
   u = (2*3.14*(total-172)/365);
    o = 69.7 * (Math.cos(u)) + 732.9;
      total = parseFloat(o).toFixed(2);
      hour = parseFloat(total/60).toFixed(2);
      if (month > 12 || month < 0){
         document.getElementById("result").innerHTML = "Month too high or too low";
      } else if (month == 2 && day > 28){
         document.getElementById("result").innerHTML = "February has only 28 days";
      }else if ( day < 0){
         document.getElementById("result").innerHTML = "Day is too low";
      } else if(day == 0 && month == 0){
         document.getElementById("result").innerHTML = "No input";
      }else if (year >= 3000 || year < 0 ){
         document.getElementById("result").innerHTML = "Years too high or too low."; 
      }else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8  || month == 10 
               || month == 12){
                  if (day > 31){
                     document.getElementById("result").innerHTML = "Day is too high"; 
                  } else{
                     document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
                  }
      } else if (month == 4 || month == 6 || month == 9 || month == 11){
         if (day > 30){
            document.getElementById("result").innerHTML = "Day is too high"; 
      } else {
         document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
         
      }
}
     else{
      document.getElementById("result").innerHTML = total + " Minutes or " + hour + " hours ";
    }

}