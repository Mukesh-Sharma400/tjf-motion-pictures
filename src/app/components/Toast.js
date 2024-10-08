import styled from "styled-components";

export const Toast = ({ message }) => {
  return <DisplayWrapper>{message}</DisplayWrapper>;
};

const DisplayWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(0, 0, 0, 1);
  transition: all 0.5s ease-in-out;

  @media (max-width: 400px) {
    width: 300px;
    font-size: 14px;
  }
`;
