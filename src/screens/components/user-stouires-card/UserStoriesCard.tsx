import {IUserStoriesCardProps, IUserStoryPriorityProps} from "@screens/components/user-stouires-card/types";
import React, {useMemo} from "react";
import {
  StyledAngleUp,
  StyledNormalPriorityMarker,
  StyledUserStoryCard,
  StyledUserStoryCardBody,
  StyledUserStoryCardFooter, StyledUserStoryCardFooterBlock,
  StyledUserStoryCardHeader
} from "@screens/components/user-stouires-card/UserStoriesCard.styled.tsx";
import {useUserStories} from "@screens/useUserStories.ts";
import {Heading, Paragraph, Row} from "@components/base";
import {ParagraphSizeEnum} from "@components/base/paragraph/types/Paragraph.enum.ts";
import {HeadingTypesEnum} from "@components/base/heading/types/HeadingTypes.enum.ts";
import {Badge} from "@components/badge";
import {BadgeTypesEnum} from "@components/badge/types/BadgeTypes.enum.ts";
import {
  UserStoryCardColorEnum,
  UserStoryPriorityEnum
} from "@screens/components/user-stouires-card/types/UserStoryCard.enum.ts";
import {RowJustifyEnum} from "@components/base/row/types/Row.enum.ts";

const mapUserStoryColorByFeatureId = (featureId: string) => {
  switch (featureId) {
    case '1':
      return {
        card: UserStoryCardColorEnum.BLUE,
        badge: BadgeTypesEnum.BLUE
      };
    case '2':
      return {
        card: UserStoryCardColorEnum.PURPLE,
        badge: BadgeTypesEnum.PURPLE
      };
    case '3':
      return {
        card: UserStoryCardColorEnum.MAGENTA,
        badge: BadgeTypesEnum.MAGENTA
      };
    case '4':
      return {
        card: UserStoryCardColorEnum.MAGENTA,
        badge: BadgeTypesEnum.MAGENTA
      };
    case '5':
      return {
        card: UserStoryCardColorEnum.GREEN,
        badge: BadgeTypesEnum.GREEN
      }
    default:
      return {
        card: UserStoryCardColorEnum.NEUTRAL,
        badge: BadgeTypesEnum.NEUTRAL

      };
  }
}

const AngleByPriority: React.FC<IUserStoryPriorityProps> = ({priority}) => {
  switch (priority) {
    case UserStoryPriorityEnum.HIGH:
      return <StyledAngleUp/>;
    case UserStoryPriorityEnum.LOW:
      return <StyledAngleUp/>;
    case UserStoryPriorityEnum.MEDIUM:
      return <StyledNormalPriorityMarker/>;
    default:
      return null;
  }
}

const UserStoriesCard: React.FC<IUserStoriesCardProps> = ({userStory}) => {
  const {card, badge} = useMemo(() => mapUserStoryColorByFeatureId(userStory.featureId), [userStory.featureId]);
  const {getFeatureNameById} = useUserStories();
  return <StyledUserStoryCard $type={card}>
    <StyledUserStoryCardHeader>
      <Heading type={HeadingTypesEnum.H3}>{userStory.title}</Heading>
    </StyledUserStoryCardHeader>
    <StyledUserStoryCardBody>
      <Paragraph>{userStory.description}</Paragraph>
    </StyledUserStoryCardBody>
    <StyledUserStoryCardFooter>
      <Row justify={RowJustifyEnum.SPACE_BETWEEN} noWrap>
        <StyledUserStoryCardFooterBlock>
          <Paragraph size={ParagraphSizeEnum.SMALL}>{getFeatureNameById(userStory.featureId)}</Paragraph>
        </StyledUserStoryCardFooterBlock>
        <StyledUserStoryCardFooterBlock>
          <AngleByPriority priority={userStory.priority}></AngleByPriority>
          <Badge type={badge} text={userStory.storyPoints}></Badge>
        </StyledUserStoryCardFooterBlock>
      </Row>
    </StyledUserStoryCardFooter>
  </StyledUserStoryCard>
}

export default UserStoriesCard;