"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";
import film from "../../../../public/assets/film.jpg";

export default function Filmography() {
  const films = [
    {
      href: "/filmography/brief-case",
      src: film,
      heading:
        "A Brief Case - A Hindi, Thriller Short Film | Some secrets can kill",
      description:
        "While the city is sleeping, Senior Inspector Deshmukh is secretly out in search of a briefcase. But he cannot accomplish his secret mission without the help of a lock decoding expert Inspector Sadhu. Being loyal to his duty as a cop will Sadhu help Deshmukh in his dark intended mission? And what is so important in that briefcase?",
    },
    {
      href: "/filmography/brief-case",
      src: film,
      heading:
        "A Brief Case - A Hindi, Thriller Short Film | Some secrets can kill",
      description:
        "While the city is sleeping, Senior Inspector Deshmukh is secretly out in search of a briefcase. But he cannot accomplish his secret mission without the help of a lock decoding expert Inspector Sadhu. Being loyal to his duty as a cop will Sadhu help Deshmukh in his dark intended mission? And what is so important in that briefcase?",
    },
    {
      href: "/filmography/brief-case",
      src: film,
      heading:
        "A Brief Case - A Hindi, Thriller Short Film | Some secrets can kill",
      description:
        "While the city is sleeping, Senior Inspector Deshmukh is secretly out in search of a briefcase. But he cannot accomplish his secret mission without the help of a lock decoding expert Inspector Sadhu. Being loyal to his duty as a cop will Sadhu help Deshmukh in his dark intended mission? And what is so important in that briefcase?",
    },
    {
      href: "/filmography/brief-case",
      src: film,
      heading:
        "A Brief Case - A Hindi, Thriller Short Film | Some secrets can kill",
      description:
        "While the city is sleeping, Senior Inspector Deshmukh is secretly out in search of a briefcase. But he cannot accomplish his secret mission without the help of a lock decoding expert Inspector Sadhu. Being loyal to his duty as a cop will Sadhu help Deshmukh in his dark intended mission? And what is so important in that briefcase?",
    },
  ];

  return (
    <BaseLayout>
      <HeaderWrapper>
        <Header>
          <Heading>Filmography</Heading>
          <Description>
            Discover a curated list of films, from iconic blockbusters to
            acclaimed indie gems, showcasing a wide range of cinematic artistry.
          </Description>
        </Header>
      </HeaderWrapper>
      <FilmsWrapper>
        {films.map((film, index) => (
          <Film href={film.href} key={index}>
            <FilmImageWrapper>
              <FilmImage src={film.src} alt={film.heading} />
            </FilmImageWrapper>
            <FilmHeading>{film.heading}</FilmHeading>
            <FilmDescription>{film.description}</FilmDescription>
          </Film>
        ))}
      </FilmsWrapper>
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
    url("assets/filmography-background.jpg");
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

const FilmsWrapper = styled.div`
  width: 850px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: -100px auto 0;
  padding: 50px 0;
  gap: 3rem;
  transition: all 0.5s ease-in-out;
`;

const FilmImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const FilmImage = styled(Image)`
  width: 100%;
  height: 235px;
  overflow: hidden;
  border-radius: 10px 10px 13px 13px;
  transition: all 0.5s ease-in-out;
`;

const Film = styled(Link)`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 10px;
  background: #272727;
  border-radius: 13px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    ${FilmImage} {
      transform: scale(1.1);
    }
  }
`;

const FilmHeading = styled.p`
  color: white;
  padding: 0 10px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;
`;

const FilmDescription = styled.p`
  color: lightgray;
  font-size: 13px;
  padding: 0 10px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;
`;
