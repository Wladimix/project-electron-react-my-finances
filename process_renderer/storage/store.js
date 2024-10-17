import dataReducer from "@renderer/storage/DataSlice.js";
import loaderReducer from "@renderer/storage/LoadersSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        data: dataReducer,
        loaders: loaderReducer
    }
});
