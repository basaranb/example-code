import React from "react";
import styled from "styled-components";

import CollapseIcon from "../../icons/collapse";
import { Card } from "../components";

const LaneContainer = styled.div`
  position: fixed;
  bottom: 0px;
  padding-bottom: 50px;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 68%);
  transform: translateY(${({ isLaneVisible }) => (isLaneVisible ? 0 : 500)}px);
  transition: all 1s;
`;

const HeaderSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const HeaderText = styled.div`
  grid-column: 1/2;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;
`;

const CollapseButton = styled.button`
  grid-column: 2/3;
  background: transparent;
  border: none;
`;

const LaneVisible = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LaneLongWrapper = styled.div`
  display: flex;
  margin: 30px 20px;
  width: calc(350px * ${({ movieCount }) => movieCount});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lane = ({ assets, activeIndex, isLaneVisible, setLaneVisible }) => {
  const lane = React.useRef(null);

  React.useEffect(() => {
    if (!lane.current) return;
    lane.current.scrollTo({
      top: 0,
      left: activeIndex * 350,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <LaneContainer isLaneVisible={isLaneVisible}>
      <HeaderSection>
        <HeaderText>Ähnliche Videos</HeaderText>
        <CollapseButton onClick={() => setLaneVisible(false)}>
          <CollapseIcon />
        </CollapseButton>
      </HeaderSection>
      <LaneVisible ref={lane} data-test-id="lane-visible">
        <LaneLongWrapper movieCount={assets.length} data-test-id="lane-wrapper">
          {assets.map((asset, index) => (
            <Card asset={asset} isActive={index === activeIndex} key={index} />
          ))}
        </LaneLongWrapper>
      </LaneVisible>
    </LaneContainer>
  );
};

export default Lane;
