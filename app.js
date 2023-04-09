// console.log("hello")
let Name = prompt ('What Is Your Name?')
console.log("welcome "+Name)

let Gender= prompt("What Is Your Gender")
let age = prompt("What Is Your Age")
let welcome= confirm("do you want to contenu to the welcoming page?")
if(welcome==true){
    if(Gender==="male"){
    alert("welcome  "+Name+" you are in the righet place")
}
else if(Gender==="female"){
    alert("welcome  "+Name+ " you are so beautiful today")
}else{
    alert ("welcome  "+Name)
}

if(age>0){
    console.log("your age"+age)
}else{
    alert(" your age should be > 0")
}}

const answers=[];

let answer1= prompt("do you like to play football?")
let answer2= prompt("do you like to eat healthy food?")
let answer3= prompt("do you finished your homework?")

if (answer1===""){
    answer1="invalid"
}
if (answer2===""){
    answer2="invalid"
}
if (answer3===""){
    answer3="invalid"
}
answers.push(answer1);
answers.push(answer2);
answers.push(answer3);

for (let i =0; i<answers.length;i++){
    if(i==0){
        console.log("do you like to play football?"+answers[i]);
    }
    if(i==1){
        console.log("do you like to eat healthy food?"+answers[i]);

    }
    if(i==2){
        console.log("do you finished your homework?"+answers[i]);

    }

}