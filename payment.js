alert("hello");
let arr = [];

// inputs
let check = document.getElementById("btn");
check.addEventListener("click", save);

function save() {
  let cname = document.getElementById("cname").value;
  let ccnum = document.getElementById("ccnum").value;
  let expmonth = document.getElementById("expmonth").value;
  let expyear = document.getElementById("expyear").value;
  let cvv = document.getElementById("cvv").value;

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
