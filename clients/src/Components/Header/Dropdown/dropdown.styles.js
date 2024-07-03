// src/styles/SectionStyles.js
import styled from 'styled-components';

export const SectionContainer = styled.div`
  background-color: #0a1a2b;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    color: white;
    margin: 0 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardWrapper = styled.div`
  background-color: #1a2b3c;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardTitle = styled.h3`
  padding: 10px;
  font-size: 16px;
`;
