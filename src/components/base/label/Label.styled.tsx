import styled from "styled-components";
import {LabelTypesEnum} from "./types/LabelTypes.enum.ts";
import type {GetColorProps, StyledLabelProps} from "./types";
import {LabelFontSizeEnum} from "@components/base/label/types/LabelFontSize.enum.ts";

const getColor = ({type, colors}: GetColorProps) => {
  switch (type) {
    case LabelTypesEnum.BLUE:
      return colors.blue.s700;
    case LabelTypesEnum.GREEN:
      return colors.green.s700;
    case LabelTypesEnum.MAGENTA:
      return colors.magenta.s700;
    case LabelTypesEnum.PURPLE:
      return colors.purple.s700;
    default:
      return colors.gray.s950;
  }
}

const getFontSize = (size?: LabelFontSizeEnum) => {
  switch (size) {
    case LabelFontSizeEnum.XS:
      return '0.5rem';
    case LabelFontSizeEnum.S:
        return '0.75rem';
    case LabelFontSizeEnum.M:
        return '1rem';
    case LabelFontSizeEnum.L:
        return '1.25rem';
    case LabelFontSizeEnum.XL:
        return '1.5rem';
    default:
        return '1rem';
  }
}

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({type, theme}) => getColor({type, colors: theme.colors})};
  font-size: ${({size}) => getFontSize(size)};
  white-space: nowrap;
`;

export default StyledLabel;