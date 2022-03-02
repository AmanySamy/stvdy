import React from 'react'
import Carousel from 'react-material-ui-carousel'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

export default function Section7() {
    var items = [
        {
            name: "Florri Jacobs",
            img: '/img/client.png',
            jobTitle: 'CEO of Company',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            Review:['*','*','*','*','*']
        
        },
        {
            name: "Florri Jacobs",
            img: '/img/client.png',
            jobTitle: 'CEO of Company',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            Review:['*','*','*','*']
        
        },
        {
            name: "Florri Jacobs",
            img: '/img/client.png',
            jobTitle: 'CEO of Company',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            Review:['*','*','*']
        
        },
        
    ]
  return (
      <section className="section7">
          <div className="container">
              <h3 className="section-title">Dont Just Take Our World for it</h3>
              <div className="row my-5">
                  <div className="col-md-3 col-6">
                      <div className="item">
                          <span>570</span>
                          <h4>Active User</h4>
                      </div>
                  </div>
                  <div className="col-md-3 col-6">
                      <div className="item">
                          <span>570</span>
                          <h4>Active User</h4>
                      </div>
                  </div>
                  <div className="col-md-3 col-6">
                      <div className="item">
                          <span>570</span>
                          <h4>Active User</h4>
                      </div>
                  </div>
                  <div className="col-md-3 col-6">
                      <div className="item">
                          <span>570</span>
                          <h4>Active User</h4>
                      </div>
                  </div>
              </div>
              <div className="row align-items-center">
                  <div className="col-md-6">
                  <Carousel className='carousel'>
                    {
                        items.map((item, i) => (
                            <div className="review-item text-start d-flex" key={i}>
                                <img src={item.img} alt={item.name} className="img-fluidv"  />
                                <div className="item-content">
                                    <h3 className="title">{ item.name }</h3>
                                    <h4 className="sub-title">{ item.jobTitle }</h4>
                                    <p className="desc">{ item.desc }</p>
                                    <ul className="reviews list-unstyled d-flex">
                                        {item.Review.map((R,i) => (
                                            <li key={i}><StarIcon /></li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <h2>{item.name}</h2> */}

                            </div>
                        )
                        )
                    }
                </Carousel>
                  </div>
                  <div className="col-md-6">
                  <div className="custom-card">
                            <h3 className="title">
                               Acceleration Process to Grow Your Business
                            </h3>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <Button className='about-button'>About Us</Button>
                        </div>
                  </div>
              </div>
          </div>
    </section>
  )
}
