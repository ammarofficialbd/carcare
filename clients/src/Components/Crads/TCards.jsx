// src/components/TrendingCard.js
import React from 'react';
const trendImage = `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_dk2cIJTn9zJN3fbi1y-2eWbhU4wBg-fUnkA7vq4vir5gN6rSi3zvmcAqxY-dMZk7bpLIjGOAh_Dg45Du4atfmfOzaB2mj4t8XFQiPpN4KvNSA9M5aa2LFc_nbQLvp-F_PTpUjUdmYy2LUkqXrPzi7ie4zE5bn52bfPoHjFHuRZgBJ4dzE7L4d418CrU/s605/bmw-x3-my19-prev.webp`
import {
  Card,
  CardHeader,
  HeaderTitle,
  HeaderSubtitle,
  CardContent,
  Image,
  CardDetails,
  Featured,
  Title,
  Text,
  CardFooter,
  Comments,
  ArrowLink
} from './TrendingCard.styles';

const TCards = () => {
  return (
    <Card>
      <CardContent>
        <Image src={trendImage} alt="Trending Post" />
        <CardDetails>
          <Featured>FEATURED</Featured>
          <Title>The Phenomenon of NFT Rates</Title>
          <Text>By Diana Lewis</Text>
          <Text>28 Mar 2020</Text>
          <CardFooter>
            <Comments>0</Comments>
            <ArrowLink href="#">→</ArrowLink>
          </CardFooter>
        </CardDetails>
      </CardContent>
      <CardHeader>
      </CardHeader> 
    </Card>
  );
};

export default TCards;

