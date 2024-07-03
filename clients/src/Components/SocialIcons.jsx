import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 668px) {
   display:none;
  }
`;

const Icon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

const StyledFontAwesomeIcon = styled(FAIcon)`
  width: 12px;
  height: 12px;
`;

const SocialIcons = () => {
  return (
    <Container>
      <Icon>
        <StyledFontAwesomeIcon icon={faFacebook} />
      </Icon>
      <Icon>
        <StyledFontAwesomeIcon icon={faTwitter} />
      </Icon>
      <Icon>
        <StyledFontAwesomeIcon icon={faYoutube} />
      </Icon>
      <Icon>
        <StyledFontAwesomeIcon icon={faInstagram} />
      </Icon>
    </Container>
  );
};

export default SocialIcons;
