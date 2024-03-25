"use client";

import ReactPlayer from "react-player";
import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";

export default function Media() {
  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header data-aos="fade-up">
          <Heading>Media</Heading>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vero
            autem assumenda natus, ipsam rem voluptatibus
          </Description>
        </Header>
      </HeaderWrapper>
      <MediasWrapper>
        <MediaWrapper data-aos="fade-up">
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/xy49Qp3Npdo"
              controls
              width="100%"
              height="100%"
            />
          </VideoWrapper>
          <DetailsWrapper>
            Director Kushal Jadhav while receving Best Director trophy from
            Honorable Jury Suvashitraj. - Moonwhite Films International Film
            Fest 2019
          </DetailsWrapper>
        </MediaWrapper>
        <MediaWrapper data-aos="fade-up">
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/xy49Qp3Npdo"
              controls
              width="100%"
              height="100%"
            />
          </VideoWrapper>
          <DetailsWrapper>
            Director Kushal Jadhav while receving Best Director trophy from
            Honorable Jury Suvashitraj. - Moonwhite Films International Film
            Fest 2019
          </DetailsWrapper>
        </MediaWrapper>
        <MediaWrapper data-aos="fade-up">
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/xy49Qp3Npdo"
              controls
              width="100%"
              height="100%"
            />
          </VideoWrapper>
          <DetailsWrapper>
            Director Kushal Jadhav while receving Best Director trophy from
            Honorable Jury Suvashitraj. - Moonwhite Films International Film
            Fest 2019
          </DetailsWrapper>
        </MediaWrapper>
        <MediaWrapper data-aos="fade-up">
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/xy49Qp3Npdo"
              controls
              width="100%"
              height="100%"
            />
          </VideoWrapper>
          <DetailsWrapper>
            Director Kushal Jadhav while receving Best Director trophy from
            Honorable Jury Suvashitraj. - Moonwhite Films International Film
            Fest 2019
          </DetailsWrapper>
        </MediaWrapper>
      </MediasWrapper>
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

const MediasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 50px 0;
  background-color: black;
`;

const MediaWrapper = styled.div`
  width: 850px;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid grey;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const VideoWrapper = styled.div`
  width: 533px;
  min-width: 533px;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  background-color: grey;
`;

const DetailsWrapper = styled.div`
  padding: 1.5rem;
  color: white;
`;
