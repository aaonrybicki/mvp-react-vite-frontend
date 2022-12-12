import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useContext } from 'react';
import { appContext } from '../App';




function Card1(props) {
  const {setDisplayMenuItems, displayMenuItems, refreshItems, setRefreshItems}=useContext(appContext);
  function deleteClick() {
    fetch('http://localhost:8001/menuItems/'+ props.cardData.id, {
      method: 'DELETE',
      mode: 'cors'
    })
    .then(() => {
      console.log('ITEM DELETED');
     setDisplayMenuItems(false)
     setRefreshItems(true)
     setDisplayMenuItems(true);

  });
}
  return (
    <Card>
      <Card.Header as="h5">{props.cardData.name}</Card.Header>
      <Card.Body>
        <Card.Title as="p">Description: {props.cardData.description}</Card.Title>
        <Card.Text>price: ${props.cardData.price}</Card.Text>
        <Card.Text>calories: {props.cardData.calories}</Card.Text>
        <Button onClick={deleteClick} variant="primary"> Delete this item</Button>
      </Card.Body>
    </Card>
  );
}




export default Card1; 