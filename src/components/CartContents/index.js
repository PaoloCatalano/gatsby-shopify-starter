import React from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter, Footer } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { Button } from '../Button';
import { navigate } from '@reach/router';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  console.log(checkout);
  return (
    <section suppressHydrationWarning>
      {checkout?.lineItems?.length <= 0 ? (
        <h1>Your cart is empty!</h1>
      ) : (
        <h1>Your Cart</h1>
      )}

      {checkout?.lineItems?.length > 0 && (
        <CartHeader>
          <div>Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div style={{ textAlign: 'right', paddingRight: 2 }}>Amount</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(item => {
        return (
          <CartItem key={item.variant.id}>
            <div>
              <div>{item.title}</div>
              <div>
                {item.variant.title === 'Default Title'
                  ? ` - ${item.title} - `
                  : item.variant.title}
              </div>
            </div>
            <div>€ {item.variant.price}</div>
            <div>
              <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
            </div>
            <div style={{ textAlign: 'right' }}>
              € {(item.quantity * item.variant.price).toFixed(2)}
            </div>
            <div>
              <RemoveLineItem lineItemId={item.id} />
            </div>
          </CartItem>
        );
      })}
      {checkout?.lineItems?.length > 0 && (
        <CartFooter>
          <div style={{ textAlign: 'right' }}>
            <strong>Total:</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span suppressHydrationWarning>€ {checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>Continue Shopping</Button>
        </div>
        <div>
          {/* {!!checkout?.webUrl && ( //non funziona */}
          {checkout?.lineItems?.length > 0 && (
            <Button onClick={() => (window.location.href = checkout.webUrl)}>
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
}
