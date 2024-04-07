import {UserStoryPriorityEnum} from "@api/types/mock-response.enum.ts";

interface IFeature {
    title: string;
    description: string;
    id: string;
}

interface IUserStory {
    id: string,
    title: string,
    description: string,
    hours: number,
    storyPoints: number,
    priority: UserStoryPriorityEnum,
    isIncludedInScope: boolean,
    featureId: string
}

interface IMockUserStoriesResponse {
    userPrompt: string;
    concept: {
        title: string;
        description: string;
        id: string;
    },
    features: IFeature[],
    userStories: IUserStory[],
    requirements: object,
    integration: object,
    summary: object,
    estimate: {
        storyPoints: number,
    }
}

// todo: FIX-ME: this types come from the rtk query, but i have a tslint resolution error. so i copy them here as a workaround.
type QueryReturnValue<T = unknown, M = unknown> =
    {
    error?: undefined
    data: T
    meta?: M
}


type MaybePromise<T> = T | PromiseLike<T>;

export type {IFeature, IUserStory, IMockUserStoriesResponse, QueryReturnValue, MaybePromise};