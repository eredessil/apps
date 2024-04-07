import React from "react";
import {
  StyledUserStoriesListEmptyContainer,
  StyledUserStoriesListEmptyIllustration,
  StyledUserStoriesListEmptyIllustrationWrapper
} from "@screens/components/user-stories-list-empty/UserStoriesListEmpty.styled.tsx";
import {useTranslation} from "react-i18next";
import {Heading} from "@components/base";
import {HeadingTypesEnum} from "@components/base/heading/types/HeadingTypes.enum.ts";

const StyledUserStoriesListEmpty: React.FC = () => {
  const {t} = useTranslation();
  return <StyledUserStoriesListEmptyContainer>
    <StyledUserStoriesListEmptyIllustrationWrapper>
      <StyledUserStoriesListEmptyIllustration />
    </StyledUserStoriesListEmptyIllustrationWrapper>
    <Heading type={HeadingTypesEnum.H4}>{t('user_stories_list_empty')}</Heading>
  </StyledUserStoriesListEmptyContainer>
}

export {StyledUserStoriesListEmpty};