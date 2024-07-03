import styled from 'styled-components';

export const Container = styled.div`
   max-with:400px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const PostDate = styled.span`
  font-size: 14px;
  color: #666;
`;

export const CommentCount = styled.span`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;
