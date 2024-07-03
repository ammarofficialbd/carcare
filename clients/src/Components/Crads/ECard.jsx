// src/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  
  @media (max-width: 1024px) {
    width: 100%;
    height:350px;
  }
  @media (max-width: 668px) {
    width: 100%;
    height:340px;
  }

`;

const Image = styled.div`
  background: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJqnCYjUs0I0G78mo9Y-poQo3HGuFgIyiAXPjOOjJnpMlAfVyLhQqNDVBaRtZBOMdwLIFvgiS_tY0IsTb8ut7E7A3jgHXJQbqt9jlrhZLkds2uAOiYbox5OA1WFkXna1aAEYKbNisjqqZ8NpyvmX-vRKFaaMnsx1zHKTHJ7C1U16tWtKM9yX44NXdZGLI/s666/2022-kia-sportage-removebg-preview.png') no-repeat center center/cover;
  height: 200px;
  background-size: cover;
 
  @media (max-width: 1024px) {
    height: 200px;
  }
  @media (max-width: 668px) {
    height: 230px;
  }
  @media (max-width: 568px) {
    height: 200px;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Category = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 16px;
`;

const Date = styled.div`
  font-size: 12px;
  color: #aaa;
`;

const Comments = styled.div`
  font-size: 12px;
  color: #aaa;
  text-align: right;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaa;
`;

const ECard = () => {
  return (
    <CardContainer>
      <Image />
      <Content>
        <Category>BLOCKCHAIN</Category>
        <Title>What Is the Mysterious Process of Creating an NFT?</Title>
        <Container> 
        <Date>01 Feb 2020</Date>
        <Comments>0</Comments>
        </Container>
      </Content>
    </CardContainer>
  );
};

export default ECard;
