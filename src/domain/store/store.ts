import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

// reducers
import { rootReducers } from './rootReducers'

export const store = configureStore({
    devTools: process.env.NODE_ENV !== 'development' ? false : true,
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
