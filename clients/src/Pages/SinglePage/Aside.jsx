import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
flex-direction:column;
gap: 10px;
  width: 100%;
  max-width: 340px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Count = styled.span`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RecentPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TitlePost = styled.h3`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Date = styled.span`
  font-size: 14px;
  color: #888;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledFontAwesomeIcon = styled(FAIcon)`
  width: 12px;
  height: 12px;
`;

const Aside = () => {
  return (
    <Container>
      <Title>FOLLOW US</Title>
      <SocialLinks>
        <SocialLink>
          <Icon>
            <StyledFontAwesomeIcon icon={faFacebook} />
          </Icon>
          <Text>Facebook</Text>
          <Count>3K</Count>
        </SocialLink>
        <SocialLink>
          <Icon>
          <StyledFontAwesomeIcon icon={faTwitter} />
          </Icon>
          <Text>Twitter</Text>
          <Count>3K</Count>
        </SocialLink>
        <SocialLink>
          <Icon>
          <StyledFontAwesomeIcon icon={faYoutube} />
          </Icon>
          <Text>YouTube</Text>
          <Count>740</Count>
        </SocialLink>
        <SocialLink>
          <Icon>
          <StyledFontAwesomeIcon icon={faInstagram} />
          </Icon>
          <Text>Instagram</Text>
          <Count>3K</Count>
        </SocialLink>
      </SocialLinks>

      <Title>RECENT POSTS</Title>
      <RecentPosts>
        <Post>
          <Image src="https://picsum.photos/200/200" />
          <PostContent>
            <TitlePost>Best Cartoon - NFT Transformations</TitlePost>
            <Date>27 Jan 2020</Date>
          </PostContent>
        </Post>
        <Post>
          <Image src="https://picsum.photos/200/200" />
          <PostContent>
            <TitlePost>Technology Allows Modern Authors to Go Wild</TitlePost>
            <Date>22 Jan 2020</Date>
          </PostContent>
        </Post>
      </RecentPosts>
    </Container>
  );
};

export default Aside;