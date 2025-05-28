import { useState } from 'react';
import type { Dessert } from '../types/dessert';
import { Icon } from '../components/icons/Icon';
import styled from 'styled-components';

interface Props {
  item: Dessert;
}

interface ButtonProps {
  active?: boolean;
}

const DessertCard = ({ item }: Props) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setAdded(true);
    setQuantity(1);
  };

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity === 1) {
      setAdded(false);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Card>
      <ImageButtonWrapper>
        <ImageWrapper>
          <Image src={item.image} alt={item.name} />
        </ImageWrapper>

        <Button active={added} onClick={!added ? handleAdd : undefined}>
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
    </Card>
  );
};
export default DessertCard;
//
//
//
//
//
// styled-components
const Card = styled.div`
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme }) => theme.color.primaryText};

  max-width: 320px;
  height: auto;
`;

const ImageButtonWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 16px;
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
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
`;

const IconButton = styled.button`
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
