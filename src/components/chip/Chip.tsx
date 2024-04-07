import React from "react";
import type {IChipProps} from "./types";
import {Label} from "@components/base";
import {StyledChipBody} from "./Chip.styled.tsx";

const Chip : React.FC<IChipProps> = ({  type, text, onPress, selected }) => {
  return (
    <StyledChipBody $type={type} onClick={onPress} $selected={selected}>
      <Label>{text}</Label>
    </StyledChipBody>
  );
}

export default Chip;