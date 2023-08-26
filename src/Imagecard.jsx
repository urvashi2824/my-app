import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Imagecard = (val) => {
    const [Count, SetCount] = useState(0);
    const HandleClick = ()=>{
        SetCount(Count+1)
        console.log('Button clicked',Count);
    }
  return (
    <div className='Mac'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgurl}  />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>{val.desc}
        </Card.Text>
        <Button onClick={HandleClick} variant="primary">Download Now</Button>
            {Count}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Imagecard;
