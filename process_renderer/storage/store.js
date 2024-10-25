import dataReducer from "@renderer/storage/dataSlice.js";
import loaderReducer from "@renderer/storage/loadersSlice.js";
import timerReducer from "@renderer/storage/timerSlice.js";
import transactionReducer from "@renderer/storage/transactionSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        data: dataReducer,
        loaders: loaderReducer,
        timer: timerReducer,
        transactionData: transactionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});
