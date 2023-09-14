import React from "react";

import Form from "react-bootstrap/Form";

export default function FormControl({ placeholder }) {
    return <Form>
        <Form.Control placeholder={ placeholder }/>
    </Form>
}
