const updateMockCart = ({Id, Price}, quantity, cart) => {
  const i = cart.Items.findIndex(cartItem => {
    return cartItem.Id === Id
  })
  if (i >= 0) {
    let newQuantity = cart.Items[i].Quantity + quantity
    if (newQuantity < 0) {
      newQuantity = 0
    }

    cart.Items[i] = {
      Id,
      Quantity: newQuantity
    }
  } else {
    cart.Items.push({Id, Quantity: quantity})
  }
  cart.Total = cart.Total + (Price * quantity)

  return cart
}

export {
  updateMockCart
}
