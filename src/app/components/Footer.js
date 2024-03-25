import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../public/assets/logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const socialLinks = [
    {
      className: "bi bi-facebook",
      href: "https://www.facebook.com/MukeshSharma400",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-twitter-x",
      href: "https://twitter.com/mukesh_sharma36",
      tooltip: "Twitter / X",
      ariaLabel: "Twitter / X",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/mukesh_sharma400",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-threads",
      href: "https://www.threads.net/mukesh_sharma400",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
    {
      className: "bi bi-pinterest",
      href: "https://www.threads.net/mukesh_sharma400",
      tooltip: "Pinterest",
      ariaLabel: "Pinterest",
    },
    {
      className: "bi bi-youtube",
      href: "https://www.threads.net/mukesh_sharma400",
      tooltip: "YouTube",
      ariaLabel: "YouTube",
    },
  ];

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/filmography", label: "Filmography" },
    { path: "/gallery", label: "Gallery" },
    { path: "/media", label: "Media" },
  ];

  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <ColumnOne>
          <LogoNameWrapper>
            <Logo src={logo} alt="TJF Motion Pictures" />
            <Name data-aos="fade-right">TJF Motion Pictures</Name>
          </LogoNameWrapper>
          <Description data-aos="fade-right">
            Elevating Short Filmmaking to Art: Our Dedicated Team of Writers,
            Actors, Technicians, and Storytellers Craft Compelling Narratives
            with Precision and Passion.
          </Description>
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-title={link.tooltip}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.ariaLabel}
                data-aos="fade-right"
                data-aos-delay={`${(index + 1) * 100}`}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </ColumnOne>
        <ColumnTwo>
          <PagesHeading>Pages</PagesHeading>
          <PagesWrapper>
            {routesData.map((page, index) => (
              <Page
                key={index}
                href={page.path}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                {page.label}
              </Page>
            ))}
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
  font-size: 30px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
`;

const ColumnTwo = styled.div`
  width: fit-content;
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
  position: relative;
  width: 100%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: transparent;
    width: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    background-color: white;
  }

  @media (max-width: 950px) {
    font-size: 13px;
  }
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
