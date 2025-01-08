import { combineReducers, configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice'
import { employeesReducer } from '../app/employeeSlice'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        nav: navReducer,
        employees: employeesReducer,
    }),
})

export default store