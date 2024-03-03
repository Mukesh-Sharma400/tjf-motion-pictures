"use client";

import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";

export default function Filmography() {
  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header>
          <Heading>Filmography</Heading>
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
  height: 400px;
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
  text-align: center;
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
