import styled from "styled-components";
import type {IGetColorProps, IStyledBadgeBodyProps} from "@components/badge/types";
import {BadgeTypesEnum} from "@components/badge/types/BadgeTypes.enum.ts";

const getBackgroundColor = ({type, colors}: IGetColorProps) => {
  switch (type) {
    case BadgeTypesEnum.BLUE:
      return colors.blue.s300;
    case BadgeTypesEnum.GREEN:
      return colors.green.s300;
    case BadgeTypesEnum.MAGENTA:
      return colors.magenta.s400;
    case BadgeTypesEnum.PURPLE:
      return colors.purple.s500;
    default:
      return colors.gray.s300;
  }
}

const StyledBadgeBody = styled.div<IStyledBadgeBodyProps>`
  background-color: ${({theme, type}) => getBackgroundColor({type, colors: theme.colors})};
  padding: ${({theme}) => theme.spacing.xxxs} ${({theme}) => theme.spacing.xxs};
  line-height: ${({theme}) => theme.spacing.xs};
  border-radius: ${({theme}) => theme.spacing.xxs};
  font-weight: 600;
`;

export {StyledBadgeBody}