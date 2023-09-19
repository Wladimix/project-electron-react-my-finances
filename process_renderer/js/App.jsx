import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Animation.css";
import "../css/App.css";
import "../css/MonthlyBudget.css";
import "../css/Toasts.css";

import MonthlyBudget from "./Components/Pages/MonthlyBudget.jsx";
import NotificationsAboutDataValidation from "./Components/Notifications/NotificationsAboutDataValidation.jsx";

import loadAllData from "./0_Controllers/LoadAllDataController.js";

export default function App() {
    useEffect(() => {
        loadAllData();
    }, []);

    return <div className='app-container'>
        <NotificationsAboutDataValidation/>
        <MonthlyBudget/>
    </div>;
}
