function pinSet(){
    const pin= Math.round(Math.random()*10000);
    const pinLenth=pin+ "";
    if(pinLenth.length==4){
        return pin
    }else{
       
      return  pinSet()
    }
}

document.getElementById("calc-body").addEventListener("click", function(event){
 const numbers=event.target.innerText
 const calcDisplay= document.getElementById("calc-display")
 if(isNaN( numbers)){
   if(numbers == "C"){
    calcDisplay.value= " ";
    
   }
 }else{
  const previousNumber= calcDisplay.value;
  const newNumber=previousNumber+ numbers
  calcDisplay.value=  newNumber;
  const calInput=calcDisplay.value;
 }
 
})
function generatePin(){
 const mainPin= pinSet();
const displayPin= document.getElementById("display-pin");
displayPin.value=mainPin;
calOutput=displayPin.value;

}
document.getElementById("pin-submit").addEventListener("click", function(){
  const pin=document.getElementById("display-pin").value;
  const calcpin= document.getElementById("calc-display").value;
  const correctPinShow= document.getElementById("correct-show");
  const incorrectPinShow=  document.getElementById("wrong-show");
  if(pin == calcpin){
   correctPinShow.style.display="block";
   incorrectPinShow.style.display="none";
  }else{
   incorrectPinShow.style.display="block";
   correctPinShow.style.display="none";
  }
})