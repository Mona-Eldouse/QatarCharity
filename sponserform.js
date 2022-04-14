// alert("hello");
let arr = [];

// inputs
let check = document.getElementById("signbutton");
check.addEventListener("click", save);

function save() {
  let cname = document.getElementById("inputName4").value;
  let cemail= document.getElementById("inputEmail4").value;
  let caddress = document.getElementById("inputAddress").value;
  let cphone = document.getElementById("inputPhone").value;
 

  if (
    cname == "" ||
    cemail == "" ||
    caddress == "" ||
    cphone == ""
    
  ) {
    alert("please complete the form ");

  }
    else {
    arr.push({
      cname: cname,
      cemail: cemail,
      caddress: caddress,
      cphone: cphone,
    
    });
  }
  console.log(arr);
  
}
