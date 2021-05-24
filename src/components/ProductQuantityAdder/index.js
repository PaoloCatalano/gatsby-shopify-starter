import React from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import CartContext from 'context/CartContext';

export function ProductQuantityAdder({ available, variantId }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);
  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };
  const handlesubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };
  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handlesubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button type="submit" disabled={!available} fullwidth>
          add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
}
