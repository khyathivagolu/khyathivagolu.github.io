"use strict";
console.log("helloHELLOOOOOOOOO");
var i1=4;
function dropdownMenu() {
    var x= document.getElementById("dropdownIcon");
    if (x.className==="navbar"){
        x.className+=" mobile";
    }
    else {
        x.className="navbar";
    }
}