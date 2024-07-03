// src/components/Sidebar.js
import React from 'react';
import {
  SidebarContainer,
  CloseButton,
  SidebarContent,
  Logo,
  Card,
  Menu,
  SearchBox,
  SocialIcons,
  SocialIcon,
  Footer,
  ChatButton
} from './Sidebar.styles.js';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize.js';
const dummyImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_dk2cIJTn9zJN3fbi1y-2eWbhU4wBg-fUnkA7vq4vir5gN6rSi3zvmcAqxY-dMZk7bpLIjGOAh_Dg45Du4atfmfOzaB2mj4t8XFQiPpN4KvNSA9M5aa2LFc_nbQLvp-F_PTpUjUdmYy2LUkqXrPzi7ie4zE5bn52bfPoHjFHuRZgBJ4dzE7L4d418CrU/s605/bmw-x3-my19-prev.webp'; // Ensure you have a dummy image

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const size = useWindowSize();
  return (
    <SidebarContainer className={isOpen ? 'open' : 'closed'}>
      <CloseButton onClick={toggleSidebar}>×</CloseButton>
      <SidebarContent>
        <Logo>
          <h1>KICKER</h1>
          <p>the Kick-ass Multipurpose WordPress Theme</p>
        </Logo>
        {size.width <= 1024 ? (
         <Menu>
         <a href="#">Home</a>
         <a href="#">Features</a>
         <div className="submenu">
           <a href="#">Blog Page</a>
           <a href="#">Pages</a>
           <a href="#">Headers</a>
           <a href="#">Video Playlist</a>
           <a href="#">Banner Ads</a>
           <a href="#">Autoload Next Post</a>
         </div>
         <a href="#">Post Styles</a>
         <a href="#">Shop</a>
       </Menu>
        ) : (
          <>
          <Card>
          <img src={dummyImage} alt="Card 1" />
          <p>This is What Design Has Come To</p>
        </Card>
        <Card>
          <img src={dummyImage} alt="Card 2" />
          <p>New Digital NFT Digest 2022</p>
        </Card>
        <Card>
          <img src={dummyImage} alt="Card 3" />
          <p>Must-haves in Your NFT Collection</p>
        </Card>
          </>
        )}

        <SearchBox>
          <input type="text" placeholder="Type here and hit enter" />
        </SearchBox>
    
        <Footer>
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
          <p>© 2024 Kicker. All Rights Reserved.</p>
          <ChatButton>Presale Chat</ChatButton>
   
        </Footer>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
