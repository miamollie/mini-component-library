/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let Wrapper;

  switch (size) {
    case "small":
      Wrapper = SmallProgressBar;
      break;
    case "medium":
      Wrapper = MediumProgressBar;
      break;
    default:
      Wrapper = LargeProgressBar;
      break;
  }

  return (
    <Wrapper>
      <Bar
        role="progressbar"
        value={value}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <VisuallyHidden>Progress is: {value}%</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

const ProgressBarBase = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
`;

const SmallProgressBar = styled(ProgressBarBase)`
  height: 8px;
`;
const MediumProgressBar = styled(ProgressBarBase)`
  height: 12px;
`;
const LargeProgressBar = styled(ProgressBarBase)`
  height: 16px;
  border-radius: 8px;
  padding: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
  border-radius: 4px ${(props) => getRadiusForProgress(props.value)}px
    ${(props) => getRadiusForProgress(props.value)}px 4px;
`;

function getRadiusForProgress(progress) {
  return progress >= 99 ? (progress / 100) * 4 : 0;
}

export default ProgressBar;

// Josh's solution: https://github.com/css-for-js/mini-component-library/blob/solution/src/components/ProgressBar/ProgressBar.js
