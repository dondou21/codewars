var calculate = function calculate(a, o, b) {
 var result = null;
 
 if(o === "+") { 
   result = a + b;
   }
   else if(o == "-") {
     result = a - b;
   }
 if(o == "/" && b != 0) { 
   result = a / b;
   }
 if(o === "*") {
   result = a * b;
 }
 
 return result; 
}
