import dataReducer from "@renderer/storage/dataSlice.js";
import loaderReducer from "@renderer/storage/loadersSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        data: dataReducer,
        loaders: loaderReducer
    }
});
