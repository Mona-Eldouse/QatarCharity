"use strict"

let array = [];
let donateBut = document.getElementById("DonateButton");
donateBut.addEventListener("click", AddDonation);



function AddDonation () {
    let newDonation = document.getElementById("new");
    newDonation.style.display = "inline"
    console.log("hi")

}
let price = document.getElementById("price");

// function DisplayMoney(){
//     let type = document.getElementById("Type")
    
    
// }



// function display() {

// const out = document.querySelector("#para");
// let index = select.options.selectedIndex;
// out.innerHTML = select.options[index].value

// }

// function change(){
//     let type = document.getElementById("Type")
//     type.addEventListener("change",()=>display(type.value))
// }

// function display(type){
//     alert("price")
//     if (type=="Money"){
//     let price = document.getElementById("price")
//     price.style.display ="inline"}
//     else{
//         alert("else" ,type)
//     }

// }
// change()






const select = document.querySelector("#Donationlist")
select.addEventListener("change",display)


function display(){
    
    const out = document.querySelector("#para")
    out.innerHTML = select.value
    let price = document.getElementById("price")
    let paymentbut = document.getElementById("paymentButton")
    price.style.display = "inline";
    paymentbut.style.display = "inline"
    
    
    }

    console.log("hii")



let paymentbut = document.getElementById("paymentButton")
    paymentbut.addEventListener("click",payment)

function payment(){
    
}

