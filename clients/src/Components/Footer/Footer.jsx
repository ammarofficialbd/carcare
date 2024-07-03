// src/components/Footer.js
import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SectionTitle,
  SectionItem,
  FooterLink,
  SocialIcons,
  SocialIcon,
  FooterBottom
} from './Footer.styles';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>KICKER</SectionTitle>
          <SectionItem>
            All the latest news and creative articles are available at our news portal to encourage inspiration and critical thinking.
          </SectionItem>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Categories</SectionTitle>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Shop</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Authors</FooterLink>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Links</SectionTitle>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">News</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Shop</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <SocialIcon href="#">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#">
              <FaYoutube />
            </SocialIcon>
            <SocialIcon href="#">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>AxiomThemes © 2024. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
