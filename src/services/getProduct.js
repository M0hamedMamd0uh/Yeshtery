async function getAllProduct() {
  try {
    let data = await fetch("https://dummyjson.com/products");
    let result = await data.json();
    return result.products;
  } catch (e) {
    throw new Error(e);
  }
}

export default getAllProduct;
