import { useState, useEffect } from 'react';
import { Icon } from './icons/Icon';
import type { CartItem } from '../types';

import styled, { keyframes } from 'styled-components';

interface CartConfirmModalProps {
  cartItems: CartItem[];
  totalPrice: string;
  onClose: () => void;
  onRestart: () => void;
}

const CartConfirmModal = ({
  cartItems,
  totalPrice,
  onClose,
  onRestart,
}: CartConfirmModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  });

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      onRestart();
    }, 400);
  };

  return (
    // 點擊 Modal 外圍的「灰色背景區塊」時，會觸發 onClose()
    // 點擊背景可關閉 Modal
    <ModalBackdrop onClick={handleClose}>
      {/* 因為事件會「冒泡（bubble）」傳遞，如果沒加這一行，點擊白色內容區也會觸發 onClose() */}
      {/* 阻止點擊內容時冒泡  */}

      <ModalContent onClick={(e) => e.stopPropagation()} isClosing={isClosing}>
        <ModalHeader>
          <SuccessIcon>
            <Icon name='check' color='green' size={32} />
          </SuccessIcon>

          <OrderTitle>Order Confirmed</OrderTitle>
          <OrderSubtitle>We hope you enjoy your food!</OrderSubtitle>
        </ModalHeader>

        <ModalBody>
          <ItemList>
            {cartItems.map((item) => (
              <ItemWrapper key={item.id}>
                <ItemContainer>
                  <ItemImageWrapper>
                    <ItemImage src={item.image} alt={item.name} />
                  </ItemImageWrapper>

                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>

                    <ItemPriceWrapper>
                      <ItemQuantity>{item.quantity}x</ItemQuantity>
                      <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                    </ItemPriceWrapper>
                  </ItemInfo>
                </ItemContainer>

                <ItemTotal>
                  ${(item.price * item.quantity).toFixed(2)}
                </ItemTotal>
              </ItemWrapper>
            ))}
          </ItemList>
        </ModalBody>

        <OrderTotalBar>
          <TotalTitle>Order Total</TotalTitle>
          <TotalPrice>${totalPrice}</TotalPrice>
        </OrderTotalBar>

        <ModalFooter>
          <NewOrderButton onClick={handleClose}>Start New Order</NewOrderButton>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};
export default CartConfirmModal;
//
//
//
//
// ----- styled-components -----
// 定義動畫
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 10vh 0;
  overflow-y: auto; */
`;

const ModalContent = styled.div<{ isClosing?: boolean }>`
  background: ${({ theme }) => theme.color.white};

  max-width: 720px;
  width: 90%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  padding: 40px;
  border-radius: 16px;
  color: ${({ theme }) => theme.color.primaryText};

  @media (max-width: 414px) {
    padding: 24px;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    max-height: 90vh;

    border-radius: 16px 16px 0 0;
    animation: ${({ isClosing }) => (isClosing ? slideDown : slideUp)} 0.4s
      ease-out;
  }
`;

const ModalHeader = styled.div``;

const ModalBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 8px 8px 0 0;

  /* 自定 scrollbar */
  &::-webkit-scrollbar {
    width: 6px; /* 控制細度 */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 捲軸背景（軌道） */
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    border-radius: 0 8px 0 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc; /* 捲軸本體顏色 */
    border-radius: 8px; /* 圓角捲軸 */
  }

  &::-webkit-scrollbar-button {
    display: none; /* 移除上下箭頭 */
  }
`;

const ModalFooter = styled.div``;

const OrderTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-top: 8px;
`;

const OrderSubtitle = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
  padding: 0px 0 20px 0;
`;

const SuccessIcon = styled.div``;

const ItemList = styled.div`
  overflow-y: auto;

  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-radius: 8px 8px 0 0;
  padding: 0px 24px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.thirdText};
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ItemImageWrapper = styled.div``;

const ItemImage = styled.img`
  width: 80px;
  border-radius: 8px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemName = styled.div`
  font-weight: 700;
`;

const ItemPriceWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ItemQuantity = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

const ItemPrice = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
`;

const ItemTotal = styled.div`
  font-weight: 700;
`;

const OrderTotalBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  margin: 0 0 32px 0;
  border-radius: 0 0 8px 8px;
`;

const TotalTitle = styled.div``;

const TotalPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const NewOrderButton = styled.div`
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
