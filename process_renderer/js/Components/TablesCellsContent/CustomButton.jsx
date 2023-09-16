import React from "react";
import Button from "react-bootstrap/Button";

export default function CustomButton({ disabled, variant, textButton, onClick }) {
    return <Button
        disabled={ disabled }
        variant={ variant }
        onClick={ onClick }
    >
        { textButton }
    </Button>
}
