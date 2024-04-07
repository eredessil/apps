import styled from "styled-components";
import type {IChipBodyProps, IGetChipColorProps} from "./types";
import {CHIP_TYPE} from "./types/ChipType.enum.ts";


const getLabelColors = ({$type, colors, $selected}: IGetChipColorProps) => {
  if(!$selected) return {
    backgroundColor: colors.white.default,
    borderColor: colors.gray.s50,
  }

  switch ($type) {
    case CHIP_TYPE.BLUE:
      return {
        backgroundColor: colors.blue.s100,
        borderColor: colors.blue.s200,
      };
    case CHIP_TYPE.GREEN:
      return {
        backgroundColor: colors.green.s100,
        borderColor: colors.green.s200,
      };
    case CHIP_TYPE.PINK:
      return {
        backgroundColor: colors.magenta.s300,
        borderColor: colors.magenta.s400,
      };
    case CHIP_TYPE.PURPLE:
      return {
        backgroundColor: colors.purple.s300,
        borderColor: colors.purple.s400,
      };
    default:
      return {
        backgroundColor: colors.gray.s100,
        borderColor: colors.gray.s100,
      };
  }
}

const StyledChipBody = styled.div<IChipBodyProps>`
  padding: ${({theme}) => theme.spacing.xxxs} ${({theme}) => theme.spacing.s};
  border-radius: ${({theme}) => theme.spacing.l};
  border: 1px solid;
  border-color: ${({$type, theme, $selected}) => getLabelColors({$type, colors: theme.colors, $selected}).borderColor};
  background-color: ${({$type, theme, $selected}) => getLabelColors({$type, colors: theme.colors, $selected}).backgroundColor};
  display: inline-flex;
`;

export {StyledChipBody}