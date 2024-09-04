"use client";

import styled from "styled-components";
import ReactPlayer from "react-player";
import BaseLayout from "../../../components/BaseLayout";

export default function BriefCase() {
  const moreVideos = [
    {
      title: "The Guilt | Hindi Short Film | Kushal Jadhav | Hook Films",
      description:
        "The Short film unfolds as a down falling gangster finds himself in the midst of a dilemma, due to defeated fortune, standing in the way of his mental peace. Dealing with the guilt and sin, the past stands undeniable and hazy. Living in his final moments and getting through his days of Guilt, will he be able to make it in the end or will eventually succumb to his deeds.",
    },
    {
      title: "The Guilt | Hindi Short Film | Kushal Jadhav | Hook Films",
      description:
        "The Short film unfolds as a down falling gangster finds himself in the midst of a dilemma, due to defeated fortune, standing in the way of his mental peace. Dealing with the guilt and sin, the past stands undeniable and hazy. Living in his final moments and getting through his days of Guilt, will he be able to make it in the end or will eventually succumb to his deeds.",
    },
    {
      title: "The Guilt | Hindi Short Film | Kushal Jadhav | Hook Films",
      description:
        "The Short film unfolds as a down falling gangster finds himself in the midst of a dilemma, due to defeated fortune, standing in the way of his mental peace. Dealing with the guilt and sin, the past stands undeniable and hazy. Living in his final moments and getting through his days of Guilt, will he be able to make it in the end or will eventually succumb to his deeds.",
    },
  ];

  return (
    <BaseLayout>
      <ContentWrapper>
        <MediaWrapper>
          <VideoWrapper>
            <ReactPlayer
              url="https://youtu.be/xy49Qp3Npdo"
              controls
              width="100%"
              height="100%"
            />
          </VideoWrapper>
          <DetailsWrapper>
            <VideoTitle>
              A Brief Case - A Hindi, Thriller Short Film | some secrets can
              kill
            </VideoTitle>
            <CompanyName>Pocket Films</CompanyName>
            <VideoDescription>
              While the city is sleeping, Senior Inspector Deshmukh is secretly
              out in search of a briefcase. But he cannot accomplish his secret
              mission without the help of a lock decoding expert Inspector
              Sadhu. Being loyal to his duty as a cop, will Sadhu help Deshmukh
              in his dark intended mission? And what is so important in that
              briefcase?
            </VideoDescription>
          </DetailsWrapper>
        </MediaWrapper>
        <MoreVideosWrapper>
          <MoreVideosHeader>More Videos</MoreVideosHeader>
          {moreVideos.map((video, index) => (
            <MoreVideoItem key={index} video={video} />
          ))}
        </MoreVideosWrapper>
      </ContentWrapper>
    </BaseLayout>
  );
}

const MoreVideoItem = ({ video }) => (
  <MoreVideoWrapper>
    <MoreVideoThumbnail />
    <MoreVideoDetails>
      <MoreVideoTitle>{video.title}</MoreVideoTitle>
      <MoreVideoDescription>{video.description}</MoreVideoDescription>
    </MoreVideoDetails>
  </MoreVideoWrapper>
);

const ContentWrapper = styled.div`
  width: 100%;
  margin: 120px auto 0;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const MediaWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 410px;
  overflow: hidden;
  border-radius: 10px;
  background-color: grey;
`;

const DetailsWrapper = styled.div`
  color: white;
  background: #272727;
  border-radius: 13px;
  padding: 13px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const VideoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const CompanyName = styled.p``;

const VideoDescription = styled.p`
  color: lightgray;
`;

const MoreVideosHeader = styled.div`
  color: white;
  text-align: center;
  background: #272727;
  padding: 5px 13px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const MoreVideosWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MoreVideoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MoreVideoThumbnail = styled.div`
  width: 170px;
  min-width: 170px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
  background-color: grey;
`;

const MoreVideoDetails = styled.div`
  color: white;
`;

const MoreVideoTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MoreVideoDescription = styled.p`
  font-size: 12px;
  color: lightgray;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
