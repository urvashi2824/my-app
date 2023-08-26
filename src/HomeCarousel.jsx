import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./HomeCarousel.css"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img className='imgcaro' src='https://t4.ftcdn.net/jpg/02/86/05/43/360_F_286054327_3WkcLfTcDA8hQp0ph9ThNf7x3MSxwv0q.jpg' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='imgcaro' src='https://content.jdmagicbox.com/comp/def_content/malls/mandalay-bay-retail-resort-shops-shopping-bagstif-malls-7-fb76r.jpg' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='imgcaro' src='https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomeCarousel
