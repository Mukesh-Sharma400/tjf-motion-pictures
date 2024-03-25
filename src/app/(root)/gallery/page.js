"use client";

import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";

export default function Gallery() {
  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header data-aos="fade-up">
          <Heading>Gallery</Heading>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vero
            autem assumenda natus, ipsam rem voluptatibus
          </Description>
        </Header>
      </HeaderWrapper>
    </BaseLayout>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("assets/hero-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  margin-top: 50px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;
`;
