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