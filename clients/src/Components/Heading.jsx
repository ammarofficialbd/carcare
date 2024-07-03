import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin: 40px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  position: relative;
  display: inline-block;
  padding: 0 20px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    
    top: 50%;
    width: 200px;
    height: 1px;
    background: #666;
  }

  &::before {
    left: -200px;
  }

  &::after {
    right: -200px;
  }
  
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;

const Heading = ({title, subtitle}) => (
  
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeaderContainer>
);

export default Heading;
