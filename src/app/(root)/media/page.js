"use client";

import ReactPlayer from "react-player";
import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";

export default function Media() {
  const mediaItems = [
    {
      url: "https://youtu.be/xy49Qp3Npdo",
      description:
        "Director Kushal Jadhav receiving the Best Director trophy from Honorable Jury Suvashitraj - Moonwhite Films International Film Fest 2019",
    },
    {
      url: "https://youtu.be/xy49Qp3Npdo",
      description:
        "Director Kushal Jadhav receiving the Best Director trophy from Honorable Jury Suvashitraj - Moonwhite Films International Film Fest 2019",
    },
    {
      url: "https://youtu.be/xy49Qp3Npdo",
      description:
        "Director Kushal Jadhav receiving the Best Director trophy from Honorable Jury Suvashitraj - Moonwhite Films International Film Fest 2019",
    },
    {
      url: "https://youtu.be/xy49Qp3Npdo",
      description:
        "Director Kushal Jadhav receiving the Best Director trophy from Honorable Jury Suvashitraj - Moonwhite Films International Film Fest 2019",
    },
  ];

  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header>
          <Heading>Media</Heading>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vero
            autem assumenda natus, ipsam rem voluptatibus
          </Description>
        </Header>
      </HeaderWrapper>
      <MediasWrapper>
        {mediaItems.map((item, index) => (
          <MediaWrapper key={index}>
            <VideoWrapper>
              <ReactPlayer
                url={item.url}
                controls
                width="100%"
                height="100%"
                config={{ file: { attributes: { preload: "none" } } }}
              />
            </VideoWrapper>
            <DetailsWrapper>{item.description}</DetailsWrapper>
          </MediaWrapper>
        ))}
      </MediasWrapper>
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
  background: linear-gradient(rgba(0, 0, 0, 0), #0f0f0f),
    url("assets/media-background.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const MediasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -100px auto 0;
  gap: 3rem;
  padding: 50px 0;
`;

const MediaWrapper = styled.div`
  width: 850px;
  height: 300px;
  display: flex;
  align-items: center;
  background: #272727;
  border-radius: 13px;
`;

const VideoWrapper = styled.div`
  width: 533px;
  min-width: 533px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px 13px 13px 10px;
  background-color: grey;
`;

const DetailsWrapper = styled.div`
  padding: 1.5rem;
  color: white;
`;
