import type {IUserStory} from "@api/types";
import {
  UserStoryCardColorEnum,
  UserStoryPriorityEnum
} from "@screens/components/user-stouires-card/types/UserStoryCard.enum.ts";
import type {ThemeType} from "@theme/theme.ts";

interface IUserStoriesCardProps {
  userStory: IUserStory;
}

interface IStyledUserStoriesCardProps {
  color: UserStoryCardColorEnum;
}

interface IGetCardColorProps {
  colors: ThemeType['colors'];
  $type: UserStoryCardColorEnum;
}

interface IStyledUserStoryCardProps {
  $type: UserStoryCardColorEnum;
  theme: ThemeType
}

interface IUserStoryPriorityProps {
  priority: UserStoryPriorityEnum;
}

interface IStyledUserStoryCardFooterBlockProps {

}

export type {
  IUserStoriesCardProps,
  IStyledUserStoriesCardProps,
  IGetCardColorProps,
  IStyledUserStoryCardProps,
  IUserStoryPriorityProps,
  IStyledUserStoryCardFooterBlockProps
};