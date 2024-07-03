import React from 'react'
import LayOut from '../Components/LayOut'
import TCards from '../Components/Crads/TCards'
import Heading2 from '../Components/Heading2'
import SCard from '../Components/Crads/SCard'
import Fetured from '../Components/Fetured/Fetured'
import SUV from '../Components/SUV/SUV'
import Aside from '../Components/Aside/Aside'
import styled from 'styled-components';
import SFetured from '../Components/SFetured/SFetured'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  /* Responsive styles */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: .8rem;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
  }
`;
const TrendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  gap: 1rem;

`;
const MainContainer = styled.main`

`;
function Home() {
  
  return (
    <div>
      <MainContainer> 
        <LayOut>
          <Fetured/>
         <SFetured/>
          <SUV/>
        
          <Container> 
            <TrendContainer> 
            <Heading2/>
            <TCards/>
            <TCards/>
            </TrendContainer>
           <Aside/>
          </Container>
         
         </LayOut>
      </MainContainer>
    </div>
  )
}

export default Home