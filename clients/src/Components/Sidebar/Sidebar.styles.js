// src/components/Sidebar.styles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #0c1d36;
  color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.open {
    transform: translateX(0);
  }

  &.closed {
    transform: translateX(100%);
  }

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SidebarContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    margin: 0;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: white;
    text-decoration: none;
    padding: 10px 0;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }

  .submenu {
    padding-left: 20px;
    font-size: 16px;

    a {
      padding: 5px 0;
    }
  }
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    padding: 10px;
    width: 80%;
    border: none;
    border-radius: 20px;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid #2e3a50;
  padding-bottom: 10px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;
export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;

  p {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const SocialIcon = styled.a`
  color: #a8b0c3;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

export const ChatButton = styled.button`
  background-color: #00c853;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
`;
