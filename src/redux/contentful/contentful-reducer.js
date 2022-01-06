import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contentData: {},
    name: "",
    qualities: [],
    themes: []
}

const contentfulSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        fitData(state, action) {
            state.contentData = action.payload
            state.name = action.payload.name
            state.qualities = action.payload.qualities
            const themes = Object.keys(action.payload.themeData)
            const lll = []
            for (let i of themes) {
                lll.push({value: i, label: i})
            }
            state.themes = lll
        }
    }
})

export const { fitData } = contentfulSlice.actions
export default contentfulSlice