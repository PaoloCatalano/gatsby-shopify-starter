import React from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export function Cart() {
  const { checkout } = React.useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(line => {
      totalQuantity += line.quantity;
    });
  }
  return (
    <CartWrapper>
      <FaShoppingCart />
      <div suppressHydrationWarning>
        {totalQuantity} item(s) / € {checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  );
}
