"use client";

import Link from "next/link";
import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";

export default function Filmography() {
  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header data-aos="fade-up">
          <Heading>Filmography</Heading>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vero
            autem assumenda natus, ipsam rem voluptatibus
          </Description>
        </Header>
      </HeaderWrapper>
      <FilmsWrapper>
        <Film href="/filmography/brief-case" data-aos="fade-up">
          <FilmImage></FilmImage>
          <FilmHeading>
            A Brief Case - A Hindi, Thriller Short Film | some secrets can kill
          </FilmHeading>
          <FilmDescription>
            While the city is sleeping, Senior Inspector Deshmukh is secretly
            out in search of a briefcase. But he cannot accomplish his secret
            mission without the help of a lock decoding expert Inspector Sadhu.
            Being loyal to his duty as a cop will Sadhu help Deshmukh in his
            dark intended mission? And what is so important in that briefcase?
          </FilmDescription>
        </Film>
        <Film href="/filmography/brief-case" data-aos="fade-up">
          <FilmImage></FilmImage>
          <FilmHeading>
            A Brief Case - A Hindi, Thriller Short Film | some secrets can kill
          </FilmHeading>
          <FilmDescription>
            While the city is sleeping, Senior Inspector Deshmukh is secretly
            out in search of a briefcase. But he cannot accomplish his secret
            mission without the help of a lock decoding expert Inspector Sadhu.
            Being loyal to his duty as a cop will Sadhu help Deshmukh in his
            dark intended mission? And what is so important in that briefcase?
          </FilmDescription>
        </Film>
        <Film href="/filmography/brief-case" data-aos="fade-up">
          <FilmImage></FilmImage>
          <FilmHeading>
            A Brief Case - A Hindi, Thriller Short Film | some secrets can kill
          </FilmHeading>
          <FilmDescription>
            While the city is sleeping, Senior Inspector Deshmukh is secretly
            out in search of a briefcase. But he cannot accomplish his secret
            mission without the help of a lock decoding expert Inspector Sadhu.
            Being loyal to his duty as a cop will Sadhu help Deshmukh in his
            dark intended mission? And what is so important in that briefcase?
          </FilmDescription>
        </Film>
        <Film href="/filmography/brief-case" data-aos="fade-up">
          <FilmImage></FilmImage>
          <FilmHeading>
            A Brief Case - A Hindi, Thriller Short Film | some secrets can kill
          </FilmHeading>
          <FilmDescription>
            While the city is sleeping, Senior Inspector Deshmukh is secretly
            out in search of a briefcase. But he cannot accomplish his secret
            mission without the help of a lock decoding expert Inspector Sadhu.
            Being loyal to his duty as a cop will Sadhu help Deshmukh in his
            dark intended mission? And what is so important in that briefcase?
          </FilmDescription>
        </Film>
      </FilmsWrapper>
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

const FilmsWrapper = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 50px 0;
  gap: 3rem;
`;

const Film = styled(Link)`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 10px;
  border: 2px solid grey;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  text-decoration: none;
`;

const FilmImage = styled.div`
  width: 100%;
  height: 235px;
  overflow: hidden;
  border-radius: 15px;
  background-color: grey;
`;

const FilmHeading = styled.p`
  color: white;
  padding: 0 10px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const FilmDescription = styled.p`
  color: lightgray;
  padding: 0 10px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
