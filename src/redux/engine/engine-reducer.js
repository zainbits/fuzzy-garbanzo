import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    settingsNavTab: false,
    currentNavTab: ""
}

const engineSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        toggleSettingsNavTab(state, action) {
            state.settingsNavTab = action.payload
        },
        setCurrentNavTab(state, action) {
            state.currentNavTab = action.payload
        }
    }
})

export const { changeFlag, add, toggleSettingsNavTab, setCurrentNavTab } = engineSlice.actions
export default engineSlice