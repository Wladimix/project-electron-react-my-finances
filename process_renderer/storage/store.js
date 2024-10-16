import distributionReducer from "@renderer/storage/DistributionSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        distributionFinances: distributionReducer
    }
});
