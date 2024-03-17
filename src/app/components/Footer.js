import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../../public/assets/logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <ColumnOne>
          <LogoNameWrapper>
            <Logo src={logo} alt="TJF Motion Pictures" />
            <Name>TJF Motion Pictures</Name>
          </LogoNameWrapper>
          <Description>
            Elevating Short Filmmaking to Art: Our Dedicated Team of Writers,
            Actors, Technicians, and Storytellers Craft Compelling Narratives
            with Precision and Passion.
          </Description>
        </ColumnOne>
        <ColumnTwo>
          <PagesHeading>Pages</PagesHeading>
          <PagesWrapper>
            <Page href="/">Home</Page>
            <Page href="/filmography">Filmography</Page>
            <Page href="/gallery">Gallery</Page>
            <Page href="/media">Media</Page>
          </PagesWrapper>
        </ColumnTwo>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>TJF Motion Pictures</span>. All rights
            reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a href="https://mukesh-sharma.vercel.app" target="_blank">
              Mukesh Sharma
            </a>
          </p>
        </RightSide>
      </BottomWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  background: black;
  transition: all 0.5s ease-in-out;
`;

const ColumnsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 100px;
  transition: all 0.5s ease-in-out;
`;

const ColumnOne = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.5s ease-in-out;
`;

const LogoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const ColumnTwo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
`;

const PagesHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.5s ease-in-out;
`;

const Page = styled(Link)`
  font-size: 16px;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  transition: all 0.5s ease-in-out;

  span {
    font-weight: 600;
  }
`;

const RightSide = styled.div`
  transition: all 0.5s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: royalBlue;
    }
  }
`;
