
const sumar =()=>{
    const form = document.getElementById("form");
    let a= form["num1"];
    let b= form["num2"];
    let res= parseInt(a.value)+ parseInt(b.value)
    document.getElementById("result").innerHTML= res;
}

const restar =()=>{
    const form = document.getElementById("form");
    let a= form["num1"];
    let b= form["num2"];
    let res= parseInt(a.value) -  parseInt(b.value);
    document.getElementById("result").innerHTML=res;
}

const multiplicar =()=>{
    const form = document.getElementById("form");
    let a= form["num1"];
    let b= form["num2"];
    let res= parseInt(a.value) * parseInt(b.value);
    document.getElementById("result").innerHTML = res;
}

const dividir = ()=>{
    const form= document.getElementById("form");
    let a = form["num1"];
    let b= form["num2"];
    let res= parseInt(a.value)/ parseInt(b.value);
    document.getElementById("result").innerHTML= res;
}