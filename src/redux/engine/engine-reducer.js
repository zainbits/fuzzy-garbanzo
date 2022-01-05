import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flag: false,
    count: 0,
    settingsNavTab: false
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
            state.settingsNavTab = !state.settingsNavTab
        }
    }
})

export const { changeFlag, add, toggleSettingsNavTab } = engineSlice.actions
export default engineSlice