// import { useState } from 'react';
import { Icon } from '../components/icons/Icon';

import styled from 'styled-components';

import type { Dessert } from '../types/dessert';
import type { Action } from '../reducers/cartReducer';
import type { CartItem } from '../types';

interface Props {
  item: Dessert;
  dispatch: React.Dispatch<Action>;
  cartItems: CartItem[];
}

interface ButtonProps {
  $active?: boolean;
}

const DessertCard = ({ item, dispatch, cartItems }: Props) => {
  // const [added, setAdded] = useState(false);
  // const [quantity, setQuantity] = useState(1);

  const cartItem = cartItems.find((i) => i.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const added = !!cartItem;

  const handleAdd = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    // setAdded(true);
    // setQuantity(1);
  };

  const increase = () => {
    // setQuantity((prev) => prev + 1);
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id: item.id } });
  };
  const decrease = () => {
    if (quantity === 1) {
      // setAdded(false);
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } });
    } else {
      // setQuantity((prev) => prev - 1);
      dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } });
    }
  };

  // .some()是陣列的方法，用來檢查陣列裡，是否至少有一個符合條件的項目，如果有就回傳 true,沒有就回傳 false
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <CardWrapper>
      <ImageButtonWrapper>
        <ImageWrapper inCart={isInCart}>
          <Image src={item.image} alt={item.name} />
        </ImageWrapper>

        <Button $active={added} onClick={!added ? handleAdd : undefined}>
          {added ? (
            <Quantity>
              <IconButton onClick={decrease}>
                <span className='iconDefault'>
                  <Icon name='minus' color='#FFF' size={24} />
                </span>
                <span className='iconHover'>
                  <Icon name='minusFilled' color='#FFF' size={24} />
                </span>
              </IconButton>
              {quantity}
              <IconButton onClick={increase}>
                <span className='iconDefault'>
                  <Icon name='plus' color='#FFF' size={24} />
                </span>
                <span className='iconHover'>
                  <Icon name='plusFilled' color='#FFF' size={24} />
                </span>
              </IconButton>
            </Quantity>
          ) : (
            <AddToCart>
              <Icon name='cart' color='#BB441E' size={24} />
              Add to Cart
            </AddToCart>
          )}
        </Button>
      </ImageButtonWrapper>

      <Category>{item.category}</Category>
      <Name>{item.name}</Name>
      {/* toFixed(2) 算到小數點後第二位 */}
      <Price>${item.price.toFixed(2)}</Price>
    </CardWrapper>
  );
};
export default DessertCard;
//
//
//
//
//
// ----- styled-components -----
const CardWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme }) => theme.color.primaryText};

  width: 100%;
  /* max-width: 320px; */
  height: auto;
`;

const ImageButtonWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div<{ inCart?: boolean }>`
  border: 2px solid
    ${({ inCart, theme }) => (inCart ? theme.color.primary : 'none')};

  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 414px) {
    width: 100%;
    height: 216px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Category = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 40px 0 8px 0;
`;

const Name = styled.h3`
  margin: 8px 0;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  margin: 8px 0;
`;

const Button = styled.button<ButtonProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;

  cursor: pointer;
  font-weight: 700;
  max-width: 300px;
  min-width: 200px;
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 共用 BaseButtonStyle
const BaseButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  padding: 12px 20px;
  border-radius: 999px;

  transition: background-color 0.2s ease;
`;

const AddToCart = styled(BaseButtonStyle)`
  border: 1px solid ${({ theme }) => theme.color.secondaryText};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primaryText};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

const Quantity = styled(BaseButtonStyle)`
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.third};
  }
`;

const IconButton = styled.div`
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
