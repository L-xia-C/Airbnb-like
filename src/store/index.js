import {configureStore} from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReduer from "./modules/detail"
const store =configureStore({
    reducer:{
        home:homeReducer,
        entire:entireReducer,
        detail:detailReduer
    }
})
export default store