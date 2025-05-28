// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import styled from 'styled-components';

import { desserts } from './data/desserts';
import DessertCard from './components/DessertCard';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Title>Desserts</Title>
      <CardGrid>
        {desserts.map((item) => (
          <DessertCard key={item.id} item={item} />
        ))}
      </CardGrid>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </Wrapper>
  );
}

export default App;

// styled-components
const Wrapper = styled.div`
  max-width: 1920px;
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme }) => theme.color.primaryText};
`;

const Title = styled.h1``;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
`;
