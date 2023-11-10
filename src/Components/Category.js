import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Roll from 'react-reveal/Zoom';



const Category = ({FilterByCategory, allCategory}) => {
    const onFilter = (cat)=>{
        FilterByCategory(cat)
    }
  return (
    <Row className='my-2 mb-5'>
      <Col sm="12" className='d-flex justify-content-center'>
        <Roll>
        {
          allCategory.length >=1 ? (allCategory.map((cat)=>{
            return(
              <div>
                <button onClick={() => onFilter(cat)} style={{border: "2px solid #B45B35"}} className='btn mx-2'>{cat}</button>
              </div>
            )
          })) : <h2>لا يوجد اصناف</h2>
        }
        </Roll>
      </Col>
    </Row>
  )
}

export default Category
