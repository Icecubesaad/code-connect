import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/reducers/userSlice"
export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
        },
        devTools: process.env.NODE_ENV !== "production",
    });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;