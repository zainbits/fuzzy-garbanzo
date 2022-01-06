import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flag: false,
    count: 0,
    settingsNavTab: false,
    currentNavTab: ""
}

const engineSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        changeFlag(state, action) {
            state.flag = action.payload
        },
        add(state) {
            state.count++
        },
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