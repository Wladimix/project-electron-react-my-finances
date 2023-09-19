import React from "react";

export default function RowWithDownloadNotification({ notificationText, colSpan }) {
    return <tr><td className='table-cell' colSpan={ colSpan }>{ notificationText }</td></tr>;
}
