const updateMockCart = (product, quantity, cart) => {
  console.log('Mocking')
  const i = cart.Items.findIndex(cartItem => {
    return cartItem.Id === product.Id
  })
  if (i >= 0) {
    let newQuantity = cart.Items[i].Quantity + quantity
    if (newQuantity < 0) {
      newQuantity = 0
    } else {
      cart.Total = cart.Total + (product.Price * quantity)
    }

    cart.Items[i] = {
      Id: product.Id,
      Quantity: newQuantity
    }
  } else {
    cart.Items.push({Id: product.Id, Quantity: quantity})
    cart.Total = cart.Total + (product.Price * quantity)
  }

  return cart
}

export {
  updateMockCart
}
