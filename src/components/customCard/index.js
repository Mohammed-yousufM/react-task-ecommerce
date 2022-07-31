import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CustomCard({ imgSrc, title, body }) {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={imgSrc}
          height="175px"
          className="rounded"
        />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text
            style={{ height: 200, overflowY: 'hidden', textAlign: 'left' }}
          >
            {body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCard;
