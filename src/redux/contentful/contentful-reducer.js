import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contentData: {},
    name: "",
    qualities: []
}

const contentfulSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        fitData(state, action) {
            state.contentData = action.payload
            state.name = action.payload.name
            state.qualities = action.payload.qualities
        }
    }
})

export const { fitData } = contentfulSlice.actions
export default contentfulSlice