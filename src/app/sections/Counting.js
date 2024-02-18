import CountUp from "react-countup";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Counting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <DisplayWrapper ref={ref}>
      <ContentWrapper>
        <Number>
          {isVisible ? <CountUp start={0} end={20} duration={5} /> : "0"}+
        </Number>
        <Label>Awards</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number>
          {isVisible ? <CountUp start={0} end={10} duration={5} /> : "0"}+
        </Number>
        <Label>Films</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number>
          {isVisible ? <CountUp start={0} end={100} duration={5} /> : "0"}+
        </Number>
        <Label>Countries</Label>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
  background-color: black;
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 2px;
  height: 100px;
  background-color: grey;
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

const Number = styled.p`
  font-size: 40px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Label = styled.p`
  font-size: 20px;
  color: grey;
  transition: all 0.5s ease-in-out;
`;
