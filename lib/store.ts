import { admissionApi } from "@/api/admission/admissions.api";
import { appointmentApi } from "@/api/appointments/appointments.api";
import { patientsApi } from "@/api/patients/patients.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(patientsApi.middleware)
      .concat(appointmentApi.middleware)
      .concat(admissionApi.middleware),
});