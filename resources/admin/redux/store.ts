import { configureStore } from "@reduxjs/toolkit"
import {useDispatch} from "react-redux";
import rootReducer from "./rootReducer"
import logger from "redux-logger";
const _ = require("lodash");
import { batchedSubscribe } from 'redux-batched-subscribe';


const debounceNotify = _.debounce((notify: () => any) => notify());

const store = configureStore({
    reducer : rootReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
    enhancers : [batchedSubscribe(debounceNotify)]
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch : () => AppDispatch = useDispatch

export default store;