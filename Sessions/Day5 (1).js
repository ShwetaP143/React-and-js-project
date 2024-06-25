//29 Feb 24

// if (document.all) {
//   console.log("if statement");
// } else {
//   console.log("else statement");
// }
//  0, false, undefined, null, NaN, document.all these are false

//sync js is synchronous language
//task 1 = 5 sec
//task 2 = 3 sec
//task 3 = 7 sec
// Total Time= 15 sec

//async
//task 1 = 5 sec
//task 2 = 3 sec
//task 3 = 7 sec
// Total Time= 7 sec

// setTimeout(() => {
//   console.log("Boom1");
// }, 5000);

// setTimeout(() => {
//   console.log("Boom2");
// }, 7000);

// setTimeout(() => {
//   console.log("Boom3");
// }, 3000);

// setInterval(() => {
//   console.log("Boom Boom");
// }, 2000);

// async function getData() {
//   let productNumber = 22;
//   let rawData = await fetch("https://dummyjson.com/products/" + productNumber);
//   let finalData = await rawData.json();
//   console.log(finalData);
// }
// getData();
// {
/* <h1 id="myText">Hello World</h1>
<button onclick="changeColor('red')">Red</button>
<button onclick="changeColor('blue')">Blue</button>
<button onclick="changeColor('green')">Blue</button>
<script>
  function changeColor(color) {
    let myElement = document.getElementById("myText");
    myElement.style.color = color;
  }
</script> */
// }
