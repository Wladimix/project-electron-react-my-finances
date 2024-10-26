import dataReducer from "@renderer/storage/dataSlice.js";
import loaderReducer from "@renderer/storage/loadersSlice.js";
import transactionReducer from "@renderer/storage/transactionSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        data: dataReducer,
        loaders: loaderReducer,
        transactionData: transactionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});
