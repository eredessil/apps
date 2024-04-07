import {useUserStoriesQuery} from "@api/user-stories.ts";
import {useCallback, useMemo, useState} from "react";

export const useUserStories = () => {
    const {data} = useUserStoriesQuery();
    const [filters, setFilters] = useState<string[]>([]);

    const selectedUserStories = useMemo(() => {
        if (!data) return [];
        return data.userStories.filter((userStory) => filters.includes(userStory.featureId));
    }, [data, filters]);

    const updateFilters = useCallback((filters: string[]) => {
        setFilters(filters);
    }, []);

    const storyPoints = useMemo(() => {
        if (!data) return undefined;
        return data.estimate.storyPoints;
    }, [data]);

    const getFeatureNameById = useCallback((featureId: string) => {
        return data?.features.find((feature) => feature.id === featureId)?.title;
    }, [data]);

    return {
        userStories: selectedUserStories,
        features: data?.features ?? [],
        totalStoryPoints: storyPoints,
        updateFilters,
        getFeatureNameById
    }
}