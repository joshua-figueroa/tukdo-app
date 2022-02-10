import { data as sampleData } from "../../data"

import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { Section } from "../../model/section";
import { RootState } from "../store";

type ProgressState = {
    data?: Section[]
}

const initialState: ProgressState = {
    data: sampleData,
};

export const lessonsSlice = createSlice({
    name: "lessons",
    initialState,
    reducers: {},
});

export const selectLessons = (state: RootState) => state.lessons.data;

export default lessonsSlice.reducer;