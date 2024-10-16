import dataReducer from "@renderer/storage/DataSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        data: dataReducer
    }
});
