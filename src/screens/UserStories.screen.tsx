import React from "react";
import {Row} from "@components/base";
import {useUserStories} from "@screens/useUserStories.ts";
import {RowJustifyEnum} from "@components/base/row/types/Row.enum.ts";
import {UserStoriesFilters} from "@screens/components/user-stories-filters";
import {UserStoriesList} from "@screens/components/user-stories-list/UserStoriesList.tsx";

const UserStoriesScreen: React.FC = () => {
  const {features, updateFilters, userStories, totalStoryPoints} = useUserStories();
  return (
    <Row paddingVertical={'xl'}>
      <Row paddingHorizontal={'l'}>
        <UserStoriesFilters features={features} onChange={updateFilters}/>
      </Row>
      <Row justify={RowJustifyEnum.SPACE_BETWEEN} paddingHorizontal={'l'}>
        <UserStoriesList userStories={userStories} totalStoryPoints={totalStoryPoints}/>
      </Row>
    </Row>
  );
}

export default UserStoriesScreen;
