alert("hello");
let arr = [];

// inputs
let check = document.getElementById("btn");
check.addEventListener("click", save);

function save() {
  let cname = document.getElementById("cname");
  let ccnum = document.getElementById("ccnum");
  let expmonth = document.getElementById("expmonth");
  let expyear = document.getElementById("expyear");
  let cvv = document.getElementById("cvv");

  if (
    cname == "" ||
    ccnum == "" ||
    expmonth == "" ||
    expyear == "" ||
    cvv == ""
  ) {
    alert("please fill the form ");
  } else {
    arr.push({
      cname: cname,
      ccnum: ccnum,
      expmonth: expmonth,
      expyear: expyear,
      cvv: cvv,
    });
  }
  console.log(arr);
}
