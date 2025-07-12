document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const product = form.product.value;
  const quantity = parseInt(form.quantity.value);
  const address = form.address.value;

  let pricePerItem = product === 'T-Shirt' ? 20 : 15;
  let total = pricePerItem * quantity;

  alert(`Order Summary:\nProduct: ${product}\nQuantity: ${quantity}\nTotal: $${total}\nDeliver to: ${address}`);
});