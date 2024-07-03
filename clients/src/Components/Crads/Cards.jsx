import React from 'react';
import styled from 'styled-components';
const cardImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6DeGC0Xjmbb5bg3PCkZnHOyghJSfzvUHkemJn5svgdjMFokx9rj9MxZNPeYNF5_88KHKW1bfRltibKH0B7NdssIaXnOwZsb9gaGipWzPdV0Go8ll0ZGjSHDEbkdq_h5BwEr3jk2EH4ESE9AzyByZqOZZ8S8MgJ18nHGXEV9LJBPWFgIQpPJY7QUYJZ6Q/s320/bmw-3-series-modellfinder.png';


const Image = styled.div`
  width:100%;
  height:260px;
  background-image: url(${cardImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease-in-out 0.3s;
  @media (max-width: 1024px) {
    height:260px;
  }
  @media (max-width: 768px) {
    height:260px;
  }
  @media (max-width: 568px) {
    height: 220px;
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Tag = styled.div`
  background: #001f3f;
  color: white;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;

  @media (max-width: 320px) {
     font-size: 20px;
  }
    
  @media (max-width: 300px) {
    font-size: 18px;
  }
  @media (max-width: 268px) {
    font-size: 16px;
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  margin : .8rem auto;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px; 
  overflow: hidden;
  &:hover {
    ${Image}{
      transform: scale(1.06);
    }

    ${Tag} {
      background-color: #1E73FF;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    height:400px;
  }
  @media (max-width: 668px) {
    width: 100%;
    height:400px;
  }

  /*  @media (max-width: 1200px) {
    max-width: 360px;
  }

  @media (max-width: 1160px) {
    max-width: 340px;
  }
  @media (max-width: 1084px) {
    max-width: 320px;
    height:360px;
  }
  @media (max-width: 1024px) {
    max-width: 300px;
    height:360px;
  }
  @media (max-width: 964px) {
    max-width: 280px;
    height:360px;
  }
  @media (max-width: 910px) {
    max-width: 270px;
    height:340px;
  }
  @media (max-width: 872px) {
    max-width: 400px;
  }
  @media (max-width: 846px) {
    max-width: 380px;
  }
  @media (max-width: 846px) {
    max-width: 360px;
  }
  @media (max-width: 768px) {
    max-width: 340px;
  }
  @media (max-width: 728px) {
    max-width: 320px;
  }
  @media (max-width: 688px) {
    max-width: 300px;
    height:320px;
  }
  @media (max-width: 648px) {
     max-width: 280px;
  }
  @media (max-width: 608px) {
    max-width: 260px;
 }
 @media (max-width: 568px) {
  max-width: 100%;
}
@media (max-width: 320px) {
  height: 300px;
}
@media (max-width: 300px) {
  height: 280px;
}
@media (max-width: 268px) {
  height: 260px;
} */
 
`;
const Cards = () => (
  <CardContainer>
    <Image />
    <Content>
      <Tag>Application</Tag>
      <Title>This Is What Design Has Come To</Title>
      <Meta>
        <div>By Sandra Jones</div>
        <div>20 Jan 2020</div>
      </Meta>
    </Content>
  </CardContainer>
);

export default Cards;
