import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Imagecard.css'




const Imagecard = (val) => {
    const [Count, SetCount] = useState(0);
    const HandleClick = ()=>{
        SetCount(Count+1)
        console.log('Button clicked',Count);
       
        
    }
    const HandleDlete = ()=>{
      
      console.log('Button clicked',Count);
      SetCount(Count-1)
     
  }
  return (
    <div className='Mac'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl}  />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>{val.desc}
        </Card.Text>
        <Button className='btn' onClick={HandleClick} variant="primary">+</Button>{ Count}
        <Button className='btn' onClick={HandleDlete} variant="primary">-</Button>  { Count}
        
      
            
      </Card.Body>
    </Card>
    </div>
  )
  }
export default Imagecard;
