import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contentData: {}
}

const contentfulSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        fitData(state, actions) {
            state.contentData = actions.payload
        }
    }
})

export const { fitData } = contentfulSlice.actions
export default contentfulSlice