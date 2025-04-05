import { getHomeGoodPriceData,getHomeHighScore,getDiscount,getHotDest,getLongfor,getHomeplus} from "@/services"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (state, { dispatch,getState }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoogPrioceInfoAction(res))
    },
    getHomeHighScore().then(res=>{
        dispatch(changehighScoreInfo(res))
    }),
    getDiscount().then(res=>{
        dispatch(changediscountInfo(res))
    }),
    getHotDest().then(res=>{
        dispatch(changeHotDest(res))
    }),
    getLongfor().then(res=>{
        dispatch(changelongforInfo(res))
    }),
    getHomeplus().then(res=>{
        dispatch(changheHomePlus(res))
    })
    )
})
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceinfo: {},
        highScoreInfo:{},
        discountInfo:{},
        hotDestInfo:{},
        longforInfo:{},
        homePlusInfo:{}
    },
    reducers: {
        changeGoogPrioceInfoAction(state, {payload}) {
            state.goodPriceinfo = payload
        },
        changehighScoreInfo(state,{payload}){
            state.highScoreInfo = payload
        },
        changediscountInfo(state,{payload}){
            state.discountInfo=payload
        },
        changeHotDest(state,{payload}){
            state.hotDestInfo=payload
        },
        changelongforInfo(state,{payload}){
            state.longforInfo=payload
        },
        changheHomePlus(state,{payload}){
            state.homePlusInfo=payload
        },
    }
})
export const { changeGoogPrioceInfoAction,changehighScoreInfo,changediscountInfo,changeHotDest,changelongforInfo,changheHomePlus } = homeSlice.actions
export default homeSlice.reducer
