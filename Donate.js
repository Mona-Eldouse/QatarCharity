"use strict"

let array = [];
let donateBut = document.getElementById("DonateButton");
donateBut.addEventListener.donateBut("onclick", AddDonation);



function AddDonation () {
    let newDonation = document.getElementById("new");
    newDonation.style.display = "inline"
    console.log("hi")

}

let search =document.getElementById("Search")
search.addEventListener("click",() => searchbox(search));


function searchbox(search){
    let check = 0;
    let name = array.map((x) => x.StudentName == search.value)
    for (let i in name){
        if(name[i] == true){
        
        check = 1;
    }
}
    if(check == 0){
        alert("Name doesn't exit");
    }

}
