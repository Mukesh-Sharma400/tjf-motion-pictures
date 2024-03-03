import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../../public/assets/logo.jpg";

export const Header = () => {
  return (
    <DisplayWrapper>
      <LogoNameWrapper>
        <Logo src={logo} alt="TJF Motion Pictures" />
        <Name>TJF Motion Pictures</Name>
      </LogoNameWrapper>
      <RoutesWrapper>
        <Route href="/">Home</Route>
        <Route href="/filmography">Filmography</Route>
        <Route href="/gallery">Gallery</Route>
        <Route href="/media">Media</Route>
        <ContactBtn>Let's Talk</ContactBtn>
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 850px;
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(0, 0, 0, 1);
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const LogoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Logo = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  font-size: 16px;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: black;
  background-color: white;
  border-radius: 40px;
  height: 40px;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
`;
