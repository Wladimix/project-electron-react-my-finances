import React from "react";
import Form from "react-bootstrap/Form";

export default function FormControl({ placeholder, value,  onChange }) {
    return <Form>
        <Form.Control
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
        />
    </Form>
}
