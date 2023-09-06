import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RowWithAddition({ onClick }) {
    return <>
        <tr>
            <td><Button variant="success" onClick={onClick}>Добавить</Button></td>
            <td><Form.Control type="text"/></td>
        </tr>
    </>;
}
