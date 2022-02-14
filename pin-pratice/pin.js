function displayPin()  {
  const roundedPin=Math.round(Math.random()*10000)  
    const pin= roundedPin + '';
   if(pin.length == 4){
       return pin
   }else{   
    return  displayPin()
   }
  
}
function  generatePin(){
    const addPin=displayPin()
    const pinshow=document.getElementById("display-pin")
   pinshow.value= addPin;
    
}
 document.getElementById("key-pad").addEventListener("click", function(event){
 const inputShow=document.getElementById("typed-numbers");
 const numbers=event.target.innerText;
if(isNaN( numbers)){
    if( numbers == "C")
    inputShow.value= "";    
}else{
    const previousNumber=numbers;
    const calcInput=  inputShow.value + previousNumber;
   inputShow.value=calcInput;

}

})
function verifyPin(){
   const pinDisplay=document.getElementById("display-pin").value;
   const machingDisplay=document.getElementById("typed-numbers").value;
   const wrongshow=document.getElementById("notify-fail");
   const correctshow=document.getElementById("notify-success")
   if(pinDisplay == machingDisplay){
    correctshow.style.display="block";
    wrongshow.style.display="none"
   }else{
       wrongshow.style.display="block"
       correctshow.style.display="none";
   }
}
console.log(Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9) )
