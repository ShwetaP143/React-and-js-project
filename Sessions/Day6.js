async function getProducts() {
  let productNumber = 75;
  let rawData = await fetch("https://dummyjson.com/products/" + productNumber);
  let finalData = await rawData.json();
  console.log(finalData);
}
// getProducts();
