import { patientsApi } from "@/api/patients/patients.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [patientsApi.reducerPath]: patientsApi.reducer
    },
    middleware:(getDefaultMiddleWare)=> getDefaultMiddleWare({
        immutableCheck: false,
        serializableCheck: false
    }).concat(patientsApi.middleware)
})