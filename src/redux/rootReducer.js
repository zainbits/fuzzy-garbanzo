import { configureStore } from "@reduxjs/toolkit"
import engineSlice from "./engine/engine-reducer"
import contentfulSlice from "./contentful/contentful-reducer"

const store = configureStore({
    reducer: {
        engine: engineSlice.reducer,
        contentful: contentfulSlice.reducer
    }
})

export default store