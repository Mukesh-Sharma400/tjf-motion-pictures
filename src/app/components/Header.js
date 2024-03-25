import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.jpg";

export const Header = () => {
  const pathName = usePathname();

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/filmography", label: "Filmography" },
    { path: "/gallery", label: "Gallery" },
    { path: "/media", label: "Media" },
  ];

  return (
    <DisplayWrapper>
      <LogoNameWrapper>
        <Logo src={logo} alt="TJF Motion Pictures" />
        <Name data-aos="fade-right">TJF Motion Pictures</Name>
      </LogoNameWrapper>
      <RoutesWrapper>
        {routesData.map((page, index) => (
          <Route
            key={index}
            href={page.path}
            className={pathName === page.path ? "active" : ""}
            data-aos="fade-left"
            data-aos-delay={`${(index + 1) * 100}`}
          >
            {page.label}
          </Route>
        ))}

        <ContactBtn>Let's Talk</ContactBtn>
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 850px;
  position: fixed;
  top: 40px;
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
  position: relative;
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding-bottom: 3px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: white;
    width: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    font-weight: 600;
    &::before {
      width: 100%;
      background-color: white;
    }
  }
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
