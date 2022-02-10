import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _, { get } from "lodash";
import { data as sampleData } from "../../helpers/data"
import { getData } from "../../helpers/storage";
import { AppThunk, RootState } from "../store";

type Progress = {
    id: string,
    progress: number
}

type ProgressState = {
    data?: Progress[]
}

const initialState: ProgressState = {
    data: [],
};

export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        addProgress: (state: ProgressState, action: PayloadAction<Progress>) => {
            const stateData = state.data!
            const currentIndex = stateData.findIndex(lesson => lesson.id === action.payload.id)!

            if (currentIndex > 0) {
                stateData[currentIndex].progress = action.payload.progress
                state.data = stateData
            } else {
                state.data = [...stateData, action.payload]
            }
        },
        clearAllProgress: state => {
            state.data = state.data?.map(({ id }) => ({ id, progress: 0 }));
        },
    },
});

export const { addProgress, clearAllProgress } = progressSlice.actions;

export const getAllProgress = (): AppThunk => async (dispatch: (arg0: any) => void) => {
    const lessonIDs = _.flatMap(sampleData.map(section => section.lessons.map((lesson) => lesson.id)))
    lessonIDs.forEach(async (id) => {
        let savedProgress = await (getData(id))
        if (savedProgress)
            dispatch(addProgress({ id, progress: savedProgress as number }))
    })
};

export const selectProgress = (state: RootState) => state.progress.data;

export default progressSlice.reducer;

