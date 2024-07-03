import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`;


const LineContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 20px;
  position: relative;
`;

const ThinLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #ddd;
`;

const ThickLine = styled.div`
  width: 20px;
  height: 3px;
  background: #333;
  margin-left: 10px;
`;

const Heading2 = () => (
  <HeaderContainer>
    <Title>Trending Posts</Title>
    <Subtitle>Featured Articles</Subtitle>
 
    <LineContainer>
      <ThinLine />
      <ThickLine />
    </LineContainer>
  </HeaderContainer>
);

export default Heading2;
