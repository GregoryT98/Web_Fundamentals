var count = 68;
var countElement= document.querySelector("#count");

function add1(){
    count++;
    countElement.innerText = count ;
    console.log(count);
}

var count2 = 212;
var countElement2= document.querySelector("#count2");
function add2(){
    count2++;
    countElement2.innerText = count2 ;
    console.log(count2);
}

var count3 = 33;
var countElement3= document.querySelector("#count3");
function add3(){
    count3++;
    countElement3.innerText = count3 ;
    console.log(count3);
}

function hide(element){
    element.remove();
}

var item = document.querySelector("#go");

function searchItem(element){
    console.log(element.value);
    item.innerText = "you have search for " + element.value;
}