const addToDb = (id) => {
  let shoppingCart = {};
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  } else {
    shoppingCart = {};
  }
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { addToDb };
