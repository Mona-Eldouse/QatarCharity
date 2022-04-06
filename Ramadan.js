alert("hello from Ramadan page ")
// array 
Donate =[]
// inputs 
 let butt1 = document.getElementById("butt1")



// addEvent 
 butt1.addEventListener("click" , show) 



//  functions

function show(){
    alert("hiii")
    let showdiv = document.getElementById("style1")
    showdiv.style.display ="inline"
}

function save(){
    let pro = document.getElementById("pro").value
    let count = document.getElementById("count").value
    let cost = document.getElementById("cost").value
    let Donatebutt = document.getElementById("save")
    if (pro===" "|| count === " "|| cost ===" "){
        alert("blaaaaaaaa")
    }
    else{
        Donate.push({
            pro : pro,
            count : count,
            cost : cost 
        })
        
    }
    console.log(Donate)
}