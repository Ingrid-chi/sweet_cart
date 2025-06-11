import { useState } from 'react';
import { Icon } from '../components/icons/Icon';

import type { CartItem } from '../types/cart';
import type { Action } from '../reducers/cartReducer';

import styled from 'styled-components';
import emptyCartImg from '../assets/illustration-empty-cart.svg';
import carbon from '../assets/icon-carbon-neutral.svg';
import CartConfirmModal from './CartConfirmModal';

interface CartProps {
  cartItems: CartItem[];
  dispatch: React.Dispatch<Action>;
}

const Cart = ({ cartItems, dispatch }: CartProps) => {
  const isEmpty = cartItems.length === 0;

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleConfirmOrder = () => {
    setShowConfirmModal(true);
  };

  const handleRestartOrder = () => {
    dispatch({ type: 'CLEAR_CART' });
    setShowConfirmModal(false);
  };

  return (
    <CartWrapper>
      <CartTitle>Your Cart ({totalQuantity})</CartTitle>

      {isEmpty ? (
        <EmptyCart>
          <img src={emptyCartImg} alt={'Empty Cart'} />
          <p>Your added items will appear here</p>
        </EmptyCart>
      ) : (
        <CartList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemList>
                <ItemName>{item.name}</ItemName>
                <ItemDetails>
                  <ItemQuantity>{item.quantity}x</ItemQuantity>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                  <ItemTotal>
                    ${(item.price * item.quantity).toFixed(2)}
                  </ItemTotal>
                </ItemDetails>
              </ItemList>

              <RemoveButton onClick={() => removeItem(item.id)}>
                <span className='iconDefault'>
                  <Icon name='close' color='#766C6A' size={24} />
                </span>
                <span className='iconHover'>
                  <Icon name='close' color='#0E0000' size={24} />
                </span>
              </RemoveButton>
            </CartItem>
          ))}

          <CartTotal>
            <p>Order Total</p>
            <h2>${getTotal()}</h2>
          </CartTotal>

          <CarbonNotice>
            <img src={carbon} alt={'carbon'} />
            This is a <strong>carbon-neutral</strong> delivery
          </CarbonNotice>
          <ConfirmButton onClick={handleConfirmOrder}>
            Confirm Order
          </ConfirmButton>

          {showConfirmModal && (
            <CartConfirmModalWrapper>
              <CartConfirmModal
                cartItems={cartItems}
                totalPrice={getTotal()}
                onClose={() => setShowConfirmModal(false)}
                onRestart={handleRestartOrder}
              />
            </CartConfirmModalWrapper>
          )}
        </CartList>
      )}
    </CartWrapper>
  );
};
export default Cart;
//
//
//
//
//
// ----- styled-components -----
const CartWrapper = styled.div`
  width: 100%;
  padding: 4px 24px 24px 24px;

  max-width: 480px;
  min-width: 200px;
  height: auto;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.white};
`;

const CartTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.primaryText};
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.color.thirdText};
  padding-bottom: 24px;
`;

const ItemList = styled.div``;

const ItemName = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryText};
`;

const ItemDetails = styled.div`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.color.secondaryText};
`;

const ItemQuantity = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const ItemPrice = styled.div``;

const ItemTotal = styled.div`
  font-weight: 700;
`;

const RemoveButton = styled.div`
  cursor: pointer;
  background: none;
  border: none;

  .iconDefault {
    display: block;
  }

  .iconHover {
    display: none;
  }

  &:hover .iconDefault {
    display: none;
  }

  &:hover .iconHover {
    display: block;
  }
`;

const CartTotal = styled.div`
  color: ${({ theme }) => theme.color.primaryText};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarbonNotice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 16px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};

  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 16px 24px;
  border-radius: 999px;

  &:hover {
    background-color: ${({ theme }) => theme.color.third};
  }
`;

const CartConfirmModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
`;
