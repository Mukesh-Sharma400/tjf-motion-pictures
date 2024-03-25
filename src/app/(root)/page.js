"use client";

import { Hero } from "../sections/Hero";
import { Steps } from "../sections/Steps";
import { Contact } from "../sections/Contact";
import { Counting } from "../sections/Counting";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting />
      <Steps />
      <Contact />
    </BaseLayout>
  );
}
