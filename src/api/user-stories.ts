import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import mock from '@api/mock-response.json';
import type {IMockUserStoriesResponse, MaybePromise, QueryReturnValue} from "./types";

const reducerPath = 'userStoriesApi';

const userStoriesApi = createApi({
    reducerPath: reducerPath,
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    endpoints: (builder) => ({
        userStories: builder.query<IMockUserStoriesResponse, void>({
            queryFn: () : MaybePromise<QueryReturnValue<IMockUserStoriesResponse, undefined>>  => ({data: mock as unknown as IMockUserStoriesResponse, meta: undefined, error: undefined}),
        }),
    })
});

export const {useUserStoriesQuery} = userStoriesApi;
export default userStoriesApi;