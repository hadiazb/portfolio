import { combineReducers } from '@reduxjs/toolkit'
import { uiReducers } from './uiUseCase'
import { homeReducers } from './homeUseCase'

export const rootReducers = combineReducers({
    uiModule: uiReducers,
    homeModule: homeReducers,
})
