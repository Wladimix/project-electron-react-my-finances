import React from "react";

import Card from 'react-bootstrap/Card';

export default function CardWithTable({title, table }) {
    return <>
        <Card className='cards-with-tables'>
            <Card.Title className='card-title'>{title}</Card.Title>
            <Card.Body style={{overflowY: 'auto'}}>{table}</Card.Body>
        </Card>
    </>;
}
