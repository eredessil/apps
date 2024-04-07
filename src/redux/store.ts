import { configureStore } from '@reduxjs/toolkit'
import userStoriesApi from "@api/user-stories.ts";

export const store = configureStore({
    reducer: {
        [userStoriesApi.reducerPath]: userStoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userStoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;