import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderSize: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderSize: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInputWrapper>
        <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
          <Icon id={icon} size={styles.iconSize} />
        </IconWrapper>
        <TextInput
          style={{
            "--height": styles.height / 16 + "rem",
            "--width": width + "px",
            "--borderSize": styles.borderSize + "px",
            "--fontSize": styles.fontSize / 16 + "rem",
          }}
          placeholder={placeholder}
        />
      </TextInputWrapper>
    </>
  );
};

const TextInputWrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  color: inherit;
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--borderSize) solid black;
  font-size: var(--fontSize);
  padding-left: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
