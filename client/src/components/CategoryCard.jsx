import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.cardData2.image} />
      <Card.Body>
        <Card.Title>{props.cardData2.name}</Card.Title>
        <Card.Text> 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;