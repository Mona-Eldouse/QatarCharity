// let find = document.getElementById("find");
// find.addEventListener("input", SearchByText);

// function SearchByText() {
//   let search;
// }
// function SearchName() {
//   show(Student);
//   console.log("name");
//   let search = document.getElementById("find").value;
//   Student.filter((x, i) => {
//     if (x.name.toLowerCase().includes(search)) {
//       let tr = document.getElementById(`tr${i}`);
//       tr.style.backgroundColor = "pink";
//     }
//   });
// }

// function change() {
//   let txt = find.value;
// //   let result = document.getElementById("result");
// if (x.name.toLowerCase().includes())
//   let res = `<tr>
//     <th>Item</th>
//     <th>model</th>
//     <th>description</th>
//     <th>Price</th>
// </tr>`;
//   data.map((ob, i) => {
//     let disc = "";
//     let words = ob.description.split(" ");
//     words.map(
//       (x) =>
//         (disc +=
//           x.toLowerCase().includes(txt.toLowerCase()) && txt
//             ? `<span class='c1'>${x} </span>`
//             : `${x} `)
//     );

//     res += `<tr id='${i}'> <td>${ob.item}</td> <td>${ob.model}</td>
//           <td>${disc}</td> <td> ${ob.price}</td> </tr>`;
//   });

//   result.innerHTML = res;
// }

alert("hello")
function searchtext() {
  let input = document.getElementsByClassName('container_12').value
  input = input.toLowerCase();
  let x = document.getElementsByTagName('p');

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
      }
      else {
          x[i].style.display = "list-item";
      }
  }
}
