"use strict"

let array = [];
let donateBut = document.getElementById("DonateButton");
donateBut.addEventListener("click", AddDonation);



function AddDonation () {
    let newDonation = document.getElementById("new");
    newDonation.style.display = "inline"
    

}
let price = document.getElementById("price");
const select = document.querySelector("#Donationlist")
select.addEventListener("change",display)


function display(){
    
    //const out = document.querySelector("#para")
    //out.innerHTML = select.value
    let price = document.getElementById("price")
    let paymentbut = document.getElementById("paymentButton")
    if(select.value == "Money"){
    price.style.display = "inline";
    paymentbut.style.display = "inline"
    }
    else{
        price.style.display = "none";
        paymentbut.style.display = "none"
    }
    
    // if(select.value == "Clothes"){
    //     let shirts = document.getElementById("T-shirts")
    //     shirts.style.display = "inline"

    // }

    
    }

   let savebutton = document.getElementById("save")
   savebutton.addEventListener("click",save)
    
   

// function save(){

// }

// let paymentbut = document.getElementById("paymentButton")
//     paymentbut.addEventListener("click",payment)


// function payment(){
//    ` <script>
//         <a href="payment.html">Link </a>
//     </script>`
// }