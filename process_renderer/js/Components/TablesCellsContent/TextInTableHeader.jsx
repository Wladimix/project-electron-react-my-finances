import React from "react";

export default function TextInTableHeader({ sizeOfText, firstInscription, secondInscription }) {
    return <div>
        <div className={"text-in-table-header " + sizeOfText + " d-flex justify-content-between" }>
            <div>{ firstInscription }</div>
            <div>{ secondInscription }</div>
        </div>
    </div>;
}
