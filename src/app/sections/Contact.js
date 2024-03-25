import Image from "next/image";
import styled from "styled-components";
import contact from "../../../public/assets/contact.png";

export const Contact = () => {
  return (
    <DisplayWrapper>
      <LeftSide>
        <AboutUsImage src={contact} alt="Contact Us" />
      </LeftSide>
      <RightSide data-aos="fade-right">
        <NameEmailWrapper>
          <TextBox placeholder="John Doe" name="from_name" required />
          <TextBox
            placeholder="john.doe@gmail.com"
            name="from_email"
            required
          />
        </NameEmailWrapper>
        <TextBox placeholder="Subject" name="subject" required />
        <TextArea
          placeholder="Type your message here..."
          name="message"
          required
        />
        <SubmitBtn>Send Message</SubmitBtn>
      </RightSide>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 376px) {
    padding: 40px;
    gap: 30px;
  }
  @media (max-width: 321px) {
    padding: 30px;
    gap: 25px;
  }
`;

const NameEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  min-height: 50px;
  font-size: 18px;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 2rem);
  min-height: 150px;
  font-size: 18px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const SubmitBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: black;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  min-height: 50px;
  transition: all 0.5s ease-in-out;
`;
