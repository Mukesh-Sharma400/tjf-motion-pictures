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
