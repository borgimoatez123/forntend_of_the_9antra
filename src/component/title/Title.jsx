import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Title() {
  return (
<>
<Container>
        <div className="text">
        <Row>
        <Col>
             <div className="title">
      <h1 >  Discover Our Courses </h1>
             </div>
      
    
       
        </Col>
        <Col>
         <button className='original-button'> View More </button>
        </Col>
      </Row>
        </div>
 </Container>
</>
  )
}
