var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var float = 100*Math.random()
  var price = Math.floor(float)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var sentenceList = []

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      var listing = cart[i]
      var item = Object.keys(listing)[0]
      var price = `$${listing[item]}`
      sentenceList.push(` ${item} at ${price}`)
    }
    console.log(`In your cart, you have${sentenceList.join(',')}.`)
  }
}

function removeFromCart(item) {
  let possessive = false

  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i+1))
      !possessive
    }
  }
  if (!possessive) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
  }
  cart.length = 0
}
