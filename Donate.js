"use strict"

let DonationCart = [];
let donateBut = document.getElementById("DonateButton");
donateBut.addEventListener("click", AddDonation);



function AddDonation () {
    let newDonation = document.getElementById("new");
    newDonation.style.display = "inline"
    

}
let price = document.getElementById("price");
const select = document.querySelector("#Donationlist")
select.addEventListener("change",display)
select.addEventListener("change",displayClothes)

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
}
 const choose = document.querySelector("#Donationlist")
 choose.addEventListener("change",displayClothes)


    function displayClothes(){
        if(choose.value == "Clothes"){
        let shirts = document.getElementById("T-shirts")
        let dresses = document.getElementById("Dresses")
        let Jackets = document.getElementById("Jackets")
        let pants = document.getElementById("Pants")
       let coats = document.getElementById("Coats")
       let Babyclothes = document.getElementById("Babyclothes") 
       
      
      
        shirts.style.display = "inline";
        dresses.style.display = "inline";
        Jackets.style.display = "inline";
        pants.style.display = "inline";
        coats.style.display = "inline";
        Babyclothes.style.display = "inline";
        }
        else{
            let shirts = document.getElementById("T-shirts")
            let dresses = document.getElementById("Dresses")
            let Jackets = document.getElementById("Jackets")
            let pants = document.getElementById("Pants")
            let coats = document.getElementById("Coats")
            let Babyclothes = document.getElementById("Babyclothes")
            

            shirts.style.display = "none";
            dresses.style.display = "none";
            Jackets.style.display = "none";
            pants.style.display = "none";
            coats.style.display = "none";
            Babyclothes.style.display = "none";
           
        }
    }

    function donated(){
      let delivery = document.getElementById("Donationdelivery")
      delivery.style.display="inline"

    }
    const choosefood = document.querySelector("#Donationlist")
    choosefood.addEventListener("change",displayfood)

    function displayfood(){
        //alert("hi")
        let f = document.getElementById("food")
        if(choosefood.value == "Food"){
           f.style.display="inline";

           

        }
    }

    