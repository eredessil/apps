import type {IUserStory} from "@api/types";

interface IUserStoriesListProps {
    userStories: IUserStory[];
    totalStoryPoints?: number;
}

export type {IUserStoriesListProps};