import type {IFeature} from "@api/types";

interface IUserStoriesFilters {
    features: IFeature[],
    onChange: (selectedIds: string[]) => void
}

export type {IUserStoriesFilters};