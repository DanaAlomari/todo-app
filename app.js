let name = prompt("Whats your name", "");

let gender = prompt("enter your gender" , "");
if(gender !=="male" && gender!=="female"){
gender = prompt(`please enter only this "male" or "female"`);
}
let age = prompt("enter your age");
if (age <=0 ){
    alert("re-enter your age ")
    }

let welc= confirm("welcoming message ")





if(welc){
    
        if(gender== "male"){
            alert( "welcomr Mr : " +name)
    
        }
    
        else if(gender=="female"){
            alert( " welcome Ms : " +name)
            
    
        }
    }