import React from 'react';
import styled from 'styled-components';
import LayOut from '../../Components/LayOut';
import Aside from './Aside';

const MainContainer = styled.div`
  position:relative;
  display: flex;
  max-width: 860px;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;



const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const AuthorDate = styled.span`
  margin-left: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 10px;
  color: #333;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Question = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  display:inline;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: #f5f5f5;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ColorTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  width: 90%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OptionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const OptionValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionValue = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  cursor:pointer;
  background-color: ${(props) => props.color};
`;
const EngineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const EngineContent = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
const EngineContent2 = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const EditorChoice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

const Header = styled.div`
width: 100%;
display :flex;
justify-content:space-between;
margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  display :flex;
  justify-content:space-between;
  align-item: center;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display :flex;
 
`;

const Section = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 48%;
  }
`;



const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationButton = styled.button`
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const NavigationButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  gap:1rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image2 = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const SinglePage = () => {
  return (
    <LayOut> 
        <Container> 
        <Image src=''/> 
        <Title>T5 Things to Know Prior to Creating an NFT</Title>
      <Subtitle>Perspiciatis unde omnis iste natus error sit voluptatem.</Subtitle>

      <Author>
        <AuthorImage src="https://via.placeholder.com/30" alt="Author" />
        <div>
          <AuthorName>Sandra Jones</AuthorName>
          <AuthorDate>16 Jan 2020</AuthorDate>
        </div>
      </Author>

      <SocialIcons>
        <SocialIcon href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fas fa-times"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fas fa-envelope"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fas fa-link"></i>
        </SocialIcon>
      </SocialIcons>
        </Container>
      <MainContainer>
        <Container>

      <Content>
        <Question>Q</Question>
        <p>
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </Content>
      <ColorContainer>
      <ColorTitle>Enjoy the view.</ColorTitle>
      <Image src={'https://via.placeholder.com/600'} alt="Car" />
      <OptionsContainer>
        <Option>
          <OptionTitle>Paint:</OptionTitle>
          <OptionValues>
            <OptionValue color="#d9d9d9" />
            <OptionValue color="#000" />
            <OptionValue color="#b0b0b0" />
            <OptionValue color="#fff" />
            <OptionValue color="#ddd" />
            <OptionValue color="#699cf9" />
            <OptionValue color="#d96969" />
            <OptionValue color="#ddd" />
            <OptionValue color="#000" />
            <OptionValue color="#fff" />
            <OptionValue color="#000" />
          </OptionValues>
        </Option>
        <Option>
          <OptionTitle>Seat Trim:</OptionTitle>
          <OptionValues>
            <OptionValue color="#000" />
            <OptionValue color="#696969" />
            <OptionValue color="#d9d9d9" />
            <OptionValue color="#b07369" />
            <OptionValue color="#a0a0a0" />
            <OptionValue color="#d9d9d9" />
          </OptionValues>
        </Option>
      </OptionsContainer>
    </ColorContainer>


    <EngineContainer>
      <EngineContent>
        <Heading>Middle Post Heading</Heading>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.
        </Paragraph>
      </EngineContent>
      <EditorChoice>
        <Heading>Editor's Choice</Heading>
        <Image></Image>
      </EditorChoice>
      <EngineContent2>
        <Image></Image>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.
        </Paragraph>
      </EngineContent2>
    </EngineContainer>

    <Container>
      <Title>A smarter way to drive.</Title>
      <Header> 
        <div> smart then </div>   
        <Pagination>
        <PaginationButton>6/6</PaginationButton>
        <NavigationButton>&#8592;</NavigationButton>
        <NavigationButton>&#8594;</NavigationButton>
      </Pagination> 
      </Header>
      <Wrapper> 
        <SectionWrapper> 
        <Section>
        <Subtitle>Blind-Spot Collision-Avoidance Assist</Subtitle>
        <Description>
          If the available system detects a vehicle in your blind spot, it is designed to alert you to it, and may in certain circumstances help avoid a collision by actively moving your vehicle away from the adjacent vehicle. It can also provide helpful alerts while exiting a parallel parking spot.
        </Description>
      </Section>
      <Section>
        <Subtitle>Safe Exit Warning</Subtitle>
        <Description>
          The available system can help alert driver and passengers to certain potential hazards it detects approaching from behind before exiting the vehicle.
        </Description>
      </Section>
      <Section>
        <Subtitle>Rear Cross-Traffic Collision-Avoidance Assist</Subtitle>
        <Description>
          Using radar sensors hidden in the corners of the rear bumper, the available system scans for passing cars, motorcycles, and/or other vehicles as you back up. If the system detects a vehicle or pedestrian when backing out of a parking spot, the system is designed to issue an alert and apply the brakes.
        </Description>
      </Section>
      <Section>
        <Subtitle>Park Distance Warning-Rear</Subtitle>
        <Description>
          The standard system uses an integrated radar sensor system to help detect obstacles in the rear of your vehicle. If a hazard is detected, the system can provide an audible warning.
        </Description>
      </Section>
        </SectionWrapper>
      </Wrapper>

   
    </Container>

    <Container>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explica.
      </Text>
      <Images>
        <Image2 src="https://via.placeholder.com/400" alt="Image 1" />
        <Image2 src="https://via.placeholder.com/400" alt="Image 2" />
      </Images>
    </Container>

        </Container>

        <Aside/>
    </MainContainer>
    </LayOut>
    
  );
};

export default SinglePage;