var calcHistory = document.getElementById('history') ;
var calcVisor = document.getElementById('visor');
var total, entry;
var op;
var entryModified = false;

function clearOp(value) {
   switch (value) {
      case 'CE': // Clear Entry - Apaga a Entrada
         calcVisor.value = "0"
         entryModified = false;
         entry = undefined;
         break;
      case 'CA': // Clear All - Apaga tudo
         calcHistory.innerHTML = "";
         calcVisor.value = "0";
         entry = 0;
         total = undefined;
         entry = undefined;
         entryModified = false;
         break;
      case 'CH': // Clear History - Apaga o histórico
         calcHistory.innerHTML = ""
         total = undefined;
         break;
   }
}

function calcOp(value) {
   if (entry === undefined) {
      calcHistory.innerHTML = total + value;
   } 
   else if (total === undefined) {
      total = entry;
      calcHistory.innerHTML += entry + value;
   }
   else {      
      switch (op) {
         case '+':
            total = parseFloat(total) + parseFloat(entry);
            calcHistory.innerHTML += entry + value;
            calcVisor.value = total;   
            break;
         case '-':
            total = parseFloat(total) - parseFloat(entry);  
            calcHistory.innerHTML += entry + value;     
            calcVisor.value = total;        
            break;
         case '/':
            if(entry <= 0) {
               clearOp('CA');
               calcVisor.value = "Error, Cannot Calculate!";
            }
            else {
               total = parseFloat(total) / parseFloat(entry); 
               calcHistory.innerHTML += entry + value;       
               calcVisor.value = total;      
            }
            break;
         case '*':
            total = parseFloat(total) * parseFloat(entry); 
            calcHistory.innerHTML += entry + value;        
            calcVisor.value = total;      
            break;
            
         case '=':
            calcVisor.value = total;   
            calcHistory.innerHTML = total + value;   
            calcVisor.value = total;   
            entry = undefined;         
            break;
      }         
   }
   entryModified = false;  
   op = value;
}

function calcFormat(value) {
   switch (value) {
      case ',':
         if(calcVisor.value.includes('.')) {

         }
         else {            
            calcVisor.value += '.';
            entryModified = true;
         }
         break;
   
      case 'x²':
         calcVisor.value = entry * entry;
         entry = calcVisor.value
         break;
      case 'sqrt':
         calcVisor.value = Math.sqrt(entry);
         entry = calcVisor.value
         break;
      case '1/x':
         calcVisor.value = 1 / entry;
         entry = calcVisor.value         
         break;
      case '%':
         if (total !== undefined && total !== 0){
         calcVisor.value = (entry * total) / 100;
         entry = calcVisor.value;
         }
         break;
      case '+/-':
         calcVisor.value *= -1;
         entry *= -1;
         break;
   }
}

function calcNum(value) {
   if(entryModified == false) {
      calcVisor.value = value;      
      entry = calcVisor.value;
      entryModified = true;
      
   }
   else { // se entrada != 0, adiciona um digito no visor, atualiza entrada.
      calcVisor.value += value;   
      entry = calcVisor.value;

   }
}





