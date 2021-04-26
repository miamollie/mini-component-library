import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor="my-select-id">{label}</label>
      </VisuallyHidden>
      <NativeSelect id="my-select-id" value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <span>{displayedValue}</span>
        <IconWrapper>
          <Icon size={24} strokeWidth={2} id="chevron-down" />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 42px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
