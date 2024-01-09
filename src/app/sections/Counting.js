import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const useCountingEffect = (targetCount, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = count;
    const interval = setInterval(() => {
      if (currentCount < targetCount && startCounting) {
        currentCount += 1;
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [count, targetCount, startCounting]);
  return count;
};

export const Counting = () => {
  const awardRef = useRef(null);
  const filmRef = useRef(null);
  const countryRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setStartCounting(true);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const awardObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const filmObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const countryObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (awardRef.current) {
      awardObserver.observe(awardRef.current);
    }
    if (filmRef.current) {
      filmObserver.observe(filmRef.current);
    }
    if (countryRef.current) {
      countryObserver.observe(countryRef.current);
    }

    return () => {
      awardObserver.disconnect();
      filmObserver.disconnect();
      countryObserver.disconnect();
    };
  }, []);

  const awardCount = useCountingEffect(20, startCounting);
  const filmCount = useCountingEffect(10, startCounting);
  const countryCount = useCountingEffect(100, startCounting);

  return (
    <DisplayWrapper>
      <ContentWrapper ref={awardRef}>
        <Number>{awardCount}+</Number>
        <Label>Awards</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper ref={filmRef}>
        <Number>{filmCount}+</Number>
        <Label>Films</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper ref={countryRef}>
        <Number>{countryCount}+</Number>
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
  color: white;
  transition: all 0.5s ease-in-out;
`;
