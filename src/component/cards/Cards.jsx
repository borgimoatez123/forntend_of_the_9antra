import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cards.css"
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
const cards = [
    {
      image: "images/ang.png",
      title: 'Spring Boot/Angular',
      description: '350 DT/month',
     
    },
    {
      image: 'images/react.png',
      title: 'Node JS /React',
      description: '350 DT/month',
   
    },
    {
      image: 'images/fullter.png',
      title: 'Flutter / Firebase',
      description: '350 DT/month',
  
    },
    {
        image: 'images/bi.png',
        title: 'Business Intelligence',
        description: '350 DT/month',
    
      },
      {
        image: 'images/ai.png',
        title: 'Artificail Intelligence',
        description: '350 DT/month',
    
      },
      {
        image: 'images/devpo.png',
        title: 'Devops',
        description: '350 DT/month',
    
      },


  ];
  
export default function Cards() {
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
 


    <div className="cards">

    <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-sm-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {card.title}
                </Typography>
          
              </CardContent>
              <CardActions>
                <div size="small" className='price'>
               <p>
               {card.description}
               </p>
                </div>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </Container>
   </>
  )
}
