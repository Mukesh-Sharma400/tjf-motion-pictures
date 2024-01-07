"use client";

import styled from "styled-components";
import { Hero } from "../sections/Hero";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <DisplayWrapper>
      <Header />
      <Hero />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;
