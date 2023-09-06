import React from 'react';

import Alert from 'react-bootstrap/Alert';

export default function TitleWithValue({ title, value, variant }) {
    return <>
        <Alert className='title-with-value' variant={variant}>
            <span>{title}</span>
            <span className='value'>{value}</span>
        </Alert>
    </>;
}
