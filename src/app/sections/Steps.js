import styled from "styled-components";

export const Steps = () => {
  return (
    <DisplayWrapper>
      <LeftSide>
        <p>From Concept To Completion: We've Got You Covered!</p>
        <button>Explore Services</button>
      </LeftSide>
      <StepsWrapper>
        <StepWrapper>
          <StepName>Pre Production</StepName>
          <StepDesc>
            Pre-production serves as the pivotal phase in any creative endeavor,
            encompassing planning, idea refinement, budgeting, schedule
            creation, and the meticulous organization of logistical details.
          </StepDesc>
        </StepWrapper>
        <StepWrapper>
          <StepName>Production</StepName>
          <StepDesc>
            Production represents the dynamic phase of a creative project, where
            the plans from pre-production spring to life, with cameras rolling,
            actors delivering their performances, and the realization of the
            creative vision.
          </StepDesc>
        </StepWrapper>
        <StepWrapper>
          <StepName>Post Production</StepName>
          <StepDesc>
            Post-production emerges as the pivotal phase in creative projects,
            wherein raw content undergoes a transformation into its refined,
            polished state where editing, sound design, visual effects, and
            essential adjustments to breathe life into the project.
          </StepDesc>
        </StepWrapper>
      </StepsWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 100px;
  padding: 50px;
  background-color: black;
  transition: all 0.5s ease-in-out;
`;

const LeftSide = styled.div`
  width: 40%;
  position: relative;
  transition: all 0.5s ease-in-out;

  > p {
    font-size: 35px;
    font-weight: 600;
    color: white;
    position: sticky;
    top: 150px;
    padding-bottom: 80px;
    transition: all 0.5s ease-in-out;
  }

  > button {
    position: absolute;
    bottom: 0px;
    font-size: 20px;
    font-weight: 600;
    color: black;
    background-color: white;
    border-radius: 40px;
    height: 40px;
    padding: 0 15px;
    transition: all 0.5s ease-in-out;
  }
`;

const StepsWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  transition: all 0.5s ease-in-out;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  border-radius: 20px;
  border: 2px solid grey;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);

  background: rgb(255, 255, 255);
  background: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: all 0.5s ease-in-out;
`;

const StepName = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const StepDesc = styled.p`
  font-size: 16px;
  letter-spacing: 0.5px;
  color: white;
  transition: all 0.5s ease-in-out;
`;
