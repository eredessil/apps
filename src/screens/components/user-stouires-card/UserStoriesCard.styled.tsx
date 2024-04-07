import styled from "styled-components";
import {
  IGetCardColorProps,
  IStyledUserStoryCardFooterBlockProps,
  IStyledUserStoryCardProps
} from "@screens/components/user-stouires-card/types";
import {UserStoryCardColorEnum} from "@screens/components/user-stouires-card/types/UserStoryCard.enum.ts";
import AngleUp from '@icons/angle-up.svg';
import AngleDown from '@icons/andgle-down.svg';

const getCardColors = ({$type, colors}: IGetCardColorProps) => {
  switch ($type) {
    case UserStoryCardColorEnum.PURPLE:
      return `background-color: ${colors.purple.s400};
      border-color: ${colors.purple.s400};`;
    case UserStoryCardColorEnum.MAGENTA:
      return `background-color: ${colors.magenta.s300};
      border-color: ${colors.magenta.s400};`;
    case UserStoryCardColorEnum.GREEN:
      return `background-color: ${colors.green.s100};
      border-color: ${colors.green.s400};`;
    case UserStoryCardColorEnum.BLUE:
      return `background-color: ${colors.blue.s100};
      border-color: ${colors.blue.s400};`;
    default:
      return `background-color: ${colors.gray.s100};
      border-color: ${colors.gray.s100};`;
  }
}


const StyledUserStoryCard = styled.div<IStyledUserStoryCardProps>`
  ${({theme, $type}) => getCardColors({$type: $type, colors: theme.colors})};
  padding: ${({theme}) => theme.spacing.s};
  border-radius: ${({theme}) => theme.spacing.m};
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const StyledUserStoryCardHeader = styled.div``;

const StyledUserStoryCardBody = styled.div`
  flex: 1;
  height: 100%;
`;

const StyledUserStoryCardFooter = styled.div``;

const StyledUserStoryCardFooterBlock = styled.div<IStyledUserStoryCardFooterBlockProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme}) => theme.colors.gray.s400};
  ${({theme}) => theme.spacing.s};
  gap: ${({theme}) => theme.spacing.xs};
`;

const StyledAngleUp = styled(AngleUp)`
  width: ${({theme}) => theme.spacing.s};
  color: ${({theme}) => theme.colors.gray.s400};
`;
const StyledAngleDown = styled(AngleDown)`
  width: ${({theme}) => theme.spacing.s};
  color: ${({theme}) => theme.colors.gray.s400};
`;

const StyledNormalPriorityMarker = styled.div`
  width: ${({theme}) => theme.spacing.s};
  height: ${({theme}) => theme.spacing.xxxs};
  background-color: ${({theme}) => theme.colors.gray.s400};
  border-radius: ${({theme}) => theme.spacing.xxxs};
`;

export {
  StyledUserStoryCard,
  StyledUserStoryCardHeader,
  StyledUserStoryCardBody,
  StyledUserStoryCardFooter,
  StyledAngleUp,
  StyledAngleDown,
  StyledNormalPriorityMarker,
  StyledUserStoryCardFooterBlock
};
