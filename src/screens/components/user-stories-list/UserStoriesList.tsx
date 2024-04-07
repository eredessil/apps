import React from "react";
import type {IUserStoriesListProps} from "@screens/components/user-stories-list/types";
import {Grid, Heading, Row} from "@components/base";
import {HeadingTypesEnum, HeadingTypesWeightEnum} from "@components/base/heading/types/HeadingTypes.enum.ts";
import {Badge} from "@components/badge";
import {BadgeTypesEnum} from "@components/badge/types/BadgeTypes.enum.ts";
import {useTranslation} from "react-i18next";
import {RowJustifyEnum} from "@components/base/row/types/Row.enum.ts";
import UserStoriesCard from "@screens/components/user-stouires-card/UserStoriesCard.tsx";
import {useUserStories} from "@screens/useUserStories.ts";
import theme from "@theme/theme.ts";
import {StyledUserStoriesListEmpty} from "@screens/components/user-stories-list-empty/UserStoriesListEmpty.tsx";

const UserStoriesList : React.FC<IUserStoriesListProps> = ({userStories, totalStoryPoints}) => {
    const {t} = useTranslation();

    useUserStories();

    if (!userStories.length) {
        return <StyledUserStoriesListEmpty />;
    };

    return <>
        <Row justify={RowJustifyEnum.SPACE_BETWEEN} paddingVertical={'m'}>
            <Heading type={HeadingTypesEnum.H4} weight={HeadingTypesWeightEnum.NORMAL}>{t('user_stories_list_title')}</Heading>
            <Badge text={t('story_points_short', {points: totalStoryPoints})} type={BadgeTypesEnum.GREEN}/>
        </Row>

        <Grid.GridWrapper gap={theme.spacing.l}>
            {
                userStories.map((userStory, index) => (
                    <Grid.GridItem key={index}>
                        <UserStoriesCard userStory={userStory} />
                    </Grid.GridItem>
                ))
            }
        </Grid.GridWrapper>
    </>;
}

export {UserStoriesList};