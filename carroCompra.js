var form = document.getElementById("form2"); 

var numEntradas = document.getElementById("calcEntradas");

var resultadoAmostrar = document.getElementById("totalYdes");

var mostrame = document.getElementById("mostrame");

mostrame.addEventListener('click', resultadoCompra1());


function resultadoCompra1(){
 
  var numEntradas = document.getElementById("calcEntradas").value; 
  totalEntradas = numEntradas * 200;
  resultadoCompra = "0"; 
  
  var descuentoValue = document.getElementById("inputState").value;

  if(descuentoValue == 1){
      resultadoCompra = totalEntradas - (totalEntradas * 0.8);
  } else if (descuentoValue == 2){
    resultadoCompra = totalEntradas - (totalEntradas * 0.5);
  }else{
      resultadoCompra = totalEntradas - (totalEntradas * 0.15);
  }
 
 resultadoAmostrar.innerText= "Total a pagar " + resultadoCompra + " $";
}