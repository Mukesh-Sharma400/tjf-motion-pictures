import Image from "next/image";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/hero-background.png";

export const Hero = () => {
  return (
    <DisplayWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage} alt="Background Image" />
        <Overlay />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <Heading>Transforming Visions into Cinematic Realities</Heading>
        <Description>
          Elevating Short Filmmaking to Art: Our Dedicated Team of Writers,
          Actors, Technicians, and Storytellers Craft Compelling Narratives with
          Precision and Passion.
        </Description>
        <Button>See Projects</Button>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease-in-out;
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 850px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
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

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: black;
  background-color: white;
  border-radius: 40px;
  height: 40px;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
`;
