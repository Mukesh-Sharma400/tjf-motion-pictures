"use client";

import photos from "./photos";
import { useState } from "react";
import "react-photo-album/rows.css";
import styled from "styled-components";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import BaseLayout from "../../components/BaseLayout";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header>
          <Heading>Gallery</Heading>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vero
            autem assumenda natus, ipsam rem voluptatibus
          </Description>
        </Header>
      </HeaderWrapper>
      <ContentWrapper>
        <PhotosAlbumWrapper>
          <AlbumHeading>
            6th Rajasthan International Film Festival 2020
          </AlbumHeading>
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
        </PhotosAlbumWrapper>
        <PhotosAlbumWrapper>
          <AlbumHeading>
            6th Rajasthan International Film Festival 2020
          </AlbumHeading>
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
        </PhotosAlbumWrapper>
      </ContentWrapper>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
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
    url("assets/hero-background.png");
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: -50px 50px 50px;
`;

const PhotosAlbumWrapper = styled.div`
  background: #272727;
  padding: 2rem;
  border-radius: 13px;
`;

const AlbumHeading = styled.p`
  font-size: 25px;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem !important;
  transition: all 0.5s ease-in-out;
`;
