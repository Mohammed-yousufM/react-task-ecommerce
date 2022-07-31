import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import bookmarkno from '../../assets/icons/bookmarkno.svg';
import bookmarkyes from '../../assets/icons/bookmarkyes.svg';
import { customSTyles } from './styles';

function CustomCard({
  each,
  imgSrc,
  title,
  body = '',
  isBookmarked = false,
  onClickBookMark,
}) {
  return (
    <Col>
      <Card style={customSTyles.cardContainer}>
        <div
          style={customSTyles.svgContainer}
          onClick={() => onClickBookMark({ each, isBookmarked })}
        >
          {isBookmarked ? (
            <img src={bookmarkyes} alt="is bookmarked" />
          ) : (
            <img src={bookmarkno} alt="not bookmarked" />
          )}
        </div>
        <Card.Img
          variant="top"
          src={imgSrc}
          height="175px"
          className="rounded"
          style={customSTyles.imgStyle}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text style={customSTyles.cardTxt}>
            {body.slice(0, 180)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCard;
