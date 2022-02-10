import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import lessons from "./reducers/lessons";
import progress from "./reducers/progress";

export const store = configureStore({
    reducer: {
        lessons,
        progress,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
