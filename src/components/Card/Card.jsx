import React from "react";
import styled from "styled-components";

import PlayIcon from "../../icons/play";

const CardContainer = styled.div`
  border-radius: 5px;
  position: relative;
  width: ${({ isActive }) => (isActive ? 385 : 350)}px;
  height: ${({ isActive }) => (isActive ? 220 : 200)}px;
  margin: 0 10px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center top;
  overflow: hidden;
`;

const Info = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: calc(100% - 20px);
  height: 30%;
  background: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(71, 148, 190, 1) 100%);
`;

const PlayButtonWrapper = styled.div`
  height: 20px;
  width: 20px;
`;

const Card = ({ asset, isActive }) => {
  return (
    <CardContainer image={asset.image} isActive={isActive}>
      <Info>
        <PlayButtonWrapper>
          <PlayIcon />
        </PlayButtonWrapper>
        {asset.title}
      </Info>
    </CardContainer>
  );
};

export default Card;
