import React from 'react';
import styled from 'styled-components';
const image = `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Xqud37_GlG0UkSBPB2-9IVjc5Y8Gx-_ClfOD1bnaBvY_JwIzMYUxf_k61x95DbMOj7_b6WZlhMG70LhxCUgEzlnripip5wtWZjaK1N-Rma9CoU7fYA6jmE-eRRIAEvMZpHcN4GcV8ANdZmUQzdJyUcj10Qz_4TjEWk8njhyphenhyphenG8e1fFq7evUnMQ2Vn3_E/s660/bmw-7-series-64b7996ff2248.jpg`


const ImageContainer = styled.div`
  width: 6rem;
  height: 5.5rem;
  border-radius: 50%;
  overflow:hidden;
`;

const Image = styled.img`
 width:100%;
  height:100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out 0.3s;
`;

const TextContainer = styled.div`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 12px;
  color: #000;
  font-weight: bold;

  text-transform: uppercase;
  transition: color 0.4s ease-in-out 0.3s;
&:hover{
 color: #1E73FF;
}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.h2`
  font-size: 16px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  max-width:280px;
  background-color: white;
  padding: 10px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  &:hover{
    ${Image}{
        transform: scale(1.08);
      }
  }

`;

function SCard() {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt="Person holding cameras" />
      </ImageContainer>
      <TextContainer>
        <Title>PEOPLE</Title>
        <Subtitle>Do You Like Your NFTs?</Subtitle>
      </TextContainer>
    </CardContainer>
  );
}

export default SCard;
