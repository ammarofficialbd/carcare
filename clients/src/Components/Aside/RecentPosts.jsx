import React from 'react';
import {
  Container,
  Title,
  Post,
  Image,
  PostInfo,
  PostTitle,
  PostDate,
  CommentCount
} from './RecentPosts.styles';

const RecentPosts = () => {
  return (
    <Container>
      <Title>Recent Posts</Title>
      <Post>
        <Image src="path-to-your-image-1" alt="NFT Transformation" />
        <PostInfo>
          <PostTitle>Best Cartoon – NFT Transformations</PostTitle>
          <PostDate>27 Jan 2020</PostDate>
          <CommentCount>0</CommentCount>
        </PostInfo>
      </Post>
      <Post>
        <Image src="path-to-your-image-2" alt="Modern Authors" />
        <PostInfo>
          <PostTitle>Technology Allows Modern Authors to Go Wild</PostTitle>
          <PostDate>22 Jan 2020</PostDate>
          <CommentCount>0</CommentCount>
        </PostInfo>
      </Post>
    </Container>
  );
};

export default RecentPosts;
