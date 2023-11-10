import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';


const ItemsList = ({itemsDta}) => {
  return (
    <Row>
        <Zoom>
        {
        itemsDta.length >= 1 ? (itemsDta.map((item)=>{
            return(
                <Col key={item.id} sm="12" className='mb-3'>
                    <Card className='d-flex flex-row'>
                        <img className="img-item" alt='phot' variant="top" src={item.imgUrl}/>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-between'>
                                <div className='item-title'>{item.title}</div>
                                <div className='item-price'>{item.price}</div>
                            </Card.Title>
                            <Card.Text className='py-2'>
                            <div className='item-description'>{item.description}</div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                )
            })) : <h2 className='text-center'>There is no meels</h2>
        }
        </Zoom>
    </Row>
  )
}

export default ItemsList;
