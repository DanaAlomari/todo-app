// let name = prompt("Whats your name", "");

// let gender = prompt("enter your gender" , "");
// if(gender !=="male" && gender!=="female"){
// gender = prompt(`please enter only this "male" or "female"`);
// }
// let age = prompt("enter your age");
// if (age <=0 ){
//     alert("re-enter your age ")
//     }

// let welc= confirm("welcoming message ")





// if(welc){
    
//         if(gender== "male"){
//             alert( "welcomr Mr : " +name)
    
//         }
    
//         else if(gender=="female"){
//             alert( " welcome Ms : " +name)
            
    
//         }
//     }
    let ques=[];
ques[0]=prompt("do you love html ?");
ques[1]=prompt("do you love  css ?");
ques[2]=prompt("do you love js?");

for (let i = 0; i < 3; i++) {
    switch (ques[i]) {
          case "yes":
          case "y":
                break;
          case "no":
          case "n":
                break;
          default:
            ques[i] = "invalid";
    }
}
console.log(ques);

let rate =prompt("how do you rate my website from 1 to 5?");
if (rate < 0)
      rate= 0;
else if (rate > 5)
      rate = 5;
alert(" thank you for rated " + rate+ "rate")