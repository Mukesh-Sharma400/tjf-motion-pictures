import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/hero-background.png";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <StyledNextArrow />,
    prevArrow: <StyledPrevArrow />,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  };

  const films = [
    {
      image: backgroundImage,
      title: "Film 1",
      description:
        "A thrilling adventure of a hero embarking on a journey to save the world from impending doom.",
    },
    {
      image: backgroundImage,
      title: "Film 2",
      description:
        "A romantic tale that explores the intricacies of love and relationships in a modern setting.",
    },
    {
      image: backgroundImage,
      title: "Film 3",
      description:
        "A gripping drama that delves into the complexities of family dynamics and secrets.",
    },
    {
      image: backgroundImage,
      title: "Film 4",
      description:
        "An inspiring story of overcoming adversity and finding strength in unexpected places.",
    },
    {
      image: backgroundImage,
      title: "Film 5",
      description:
        "A dark mystery that unravels through a series of unexpected twists and turns.",
    },
    {
      image: backgroundImage,
      title: "Film 6",
      description:
        "A comedic exploration of life's absurdities through the eyes of a quirky protagonist.",
    },
  ];

  return (
    <DisplayWrapper>
      <MySlider {...settings}>
        {films.map((film, index) => (
          <MySlideWrapper key={index}>
            <MySlide>
              <SlideImageWrapper>
                <SlideImage src={film.image} alt={film.title} />
              </SlideImageWrapper>
            </MySlide>
            <SlideDetailsWrapper>
              <FilmName>{film.title}</FilmName>
              <FilmDescription>{film.description}</FilmDescription>
              <PlayBtn>
                <i class="bi bi-play-fill"></i> Watch Now
              </PlayBtn>
            </SlideDetailsWrapper>
          </MySlideWrapper>
        ))}
      </MySlider>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div``;

const MySlider = styled(Slider)`
  width: 100%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

const MySlideWrapper = styled.div`
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const MySlide = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const SlideImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
`;

const StyledArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  color: white;
  background-color: transparent;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  &.next {
    right: 10px;
  }

  &.prev {
    left: 10px;
  }
`;

const StyledNextArrow = ({ onClick }) => (
  <StyledArrowButton className="next" onClick={onClick}>
    <i class="bi bi-caret-right-fill"></i>
  </StyledArrowButton>
);

const StyledPrevArrow = ({ onClick }) => (
  <StyledArrowButton className="prev" onClick={onClick}>
    <i class="bi bi-caret-left-fill"></i>
  </StyledArrowButton>
);

const StyledDots = styled.ul`
  position: absolute;
  bottom: 20px;
  display: flex !important;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  width: 100%;
  z-index: 1;

  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 5px;
    transition: all 0.3s ease;

    &.slick-active {
      width: 20px;
      border-radius: 20px;
      background-color: white;
      transform: scale(1.2);
    }

    button {
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`;

const SlideDetailsWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 100px;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const PlayBtn = styled.button`
  width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 15px;
  font-size: 23px;
  padding: 0 10px;
  color: white;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.5s ease-in-out;

  & > i {
    font-size: 35px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const FilmName = styled.p`
  font-size: 20px;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
`;

const FilmDescription = styled.p`
  color: white;
  font-size: 13px;
  transition: all 0.5s ease-in-out;
`;
