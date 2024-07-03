import React from 'react'
import styled from 'styled-components';
export const SideContainer = styled.div`
 display: fixed;
 margin-top: 30px;
 max-width: 380px;
`;
function Aside() {
  return (
    <SideContainer>
      <FollowUs/>
      <RecentPosts/>
    </SideContainer>
  )
}
// FollowUs.js
import { Container, IconContainer, Icon, Label } from './FollowUs.Styles';
import RecentPosts from './RecentPosts';

const FollowUs = () => {
  return (
    <Container>
      <h3>Follow Us</h3>
      <IconContainer>
        <Icon>
          <i className="fab fa-facebook"></i>
          <Label>3K</Label>
        </Icon>
        <Icon>
          <i className="fab fa-twitter"></i>
          <Label>3K</Label>
        </Icon>
        <Icon>
          <i className="fab fa-youtube"></i>
          <Label>740</Label>
        </Icon>
        <Icon>
          <i className="fab fa-instagram"></i>
          <Label>3K</Label>
        </Icon>
      </IconContainer>
    </Container>
  );
};




export default Aside