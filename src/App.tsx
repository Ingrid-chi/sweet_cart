import { useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';
import { desserts } from './data/desserts';

import './App.css';
import styled from 'styled-components';
import GlobalStyle from './styles/global';
import DessertCard from './components/DessertCard';
import Cart from './components/Cart';

// import type { Dessert } from './types/dessert';
// import type { Action } from './reducers/cartReducer';

// interface Props {
//   item: Dessert;
//   dispatch: React.Dispatch<Action>;
// }

function App() {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <CardWrapper>
            <CardTitle>Desserts</CardTitle>
            <CardGrid>
              {desserts.map((item) => (
                <DessertCard
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  cartItems={cartItems}
                />
              ))}
            </CardGrid>
          </CardWrapper>

          <CartWrapper>
            <Cart cartItems={cartItems} dispatch={dispatch} />
          </CartWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
//
//
//
//
// styled-components
const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.primaryBackground};
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 2fr 1fr;

  max-width: 1920px;
  margin: 80px;

  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.primaryBackground};
`;

const CardWrapper = styled.div`
  width: 100%;
`;

const CardTitle = styled.h1``;

const CardGrid = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CartWrapper = styled.div`
  width: 100%;
`;
