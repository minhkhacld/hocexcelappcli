import { configureStore } from "@reduxjs/toolkit";
import Reducer from './reducer'

export default configureStore({
    reducer: { Reducer: Reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})