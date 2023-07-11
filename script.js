// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagNa 

// function paragraph(){
    // document.getElementById("demo").innerHTML="My name is prema";
    //block of code
// }

// console.log(5+6);-this hide the answer ,where visible enter the ctrl shift i 
// alert(10+10); this enter the jac
 
// var x = 10;
// var y = 10;
// var z = x+y;
// console.log(z);
// document.getElementById("add").innerHTML = z;

function add(){
    var a = parseInt( document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a + b;
    document.getElementById("add").innerHTML=c;
}
  
function sub(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a-b;
    document.getElementById("sub").innerHTML=c;
}

function mul(){
    var a = (document.getElementById("n1").value);
    var b = (document.getElementById("n2").value);
    var c = a*b;
    document.getElementById("mul").innerHTML=c;
}
function div(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a/b;
    document.getElementById("div").innerHTML=c;
}
