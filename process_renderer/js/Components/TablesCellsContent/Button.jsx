import React from "react";

import Button from "react-bootstrap/Button";

export default function AddingButton({ variant, textButton, onClick }) {
    return <Button
        variant={ variant }
        onClick={ onClick }
    >
        { textButton }
    </Button>
}
