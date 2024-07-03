// src/components/Footer.styles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #061138;
  color: white;
  padding: 40px 20px;
  text-align: left;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SectionItem = styled.p`
  margin: 5px 0;
  color: #a8b0c3;
  font-size: 14px;
`;

export const FooterLink = styled.a`
  color: #a8b0c3;
  text-decoration: none;
  font-size: 14px;
  margin: 5px 0;
  display: block;

  &:hover {
    color: white;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  color: #a8b0c3;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  color: #a8b0c3;

  & a {
    color: #a8b0c3;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;
