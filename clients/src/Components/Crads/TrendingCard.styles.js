// src/components/TrendingCard.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
/*   border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderSubtitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #888;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1); // Adjust the scale value to control the zoom level
  }
`;

export const CardDetails = styled.div`
  padding: 20px;
`;

export const Featured = styled.h4`
  margin: 0;
  font-size: 14px;
  color: #888;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    display: inline;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: black; // Change to desired color
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    visibility: visible;
    width: 100%;
  }
`;

export const Text = styled.p`
  margin: 5px 0;
  color: #666;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Comments = styled.span`
  color: #888;
`;

export const ArrowLink = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;
