import React from 'react'
import Carousel from 'react-material-ui-carousel'



export default function Section4() {
    var items = [
        {
            name: "slide #1",
            img: '/img/report1.png'
        },
        {
            name: "slide #2",
            img: '/img/report1.png'
        },
        {
            name: "slide #2",
            img: '/img/report1.png'
        }
    ]
    return (
        <section className="section4">
            <div className="container">
                <h3 className="sub-title">Advanced customer service Platform</h3>
                <h2 className="title">Platform Overview</h2>
                <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                <Carousel className='carousel'>
                    {
                        items.map((item, i) => (
                            <div className="m" key={i}>
                                <img src={item.img} alt={item.name} className="img-fluidv" />
                                {/* <h2>{item.name}</h2> */}

                            </div>
                        )
                        )
                    }
                </Carousel>
            </div>
        </section>
    )
}
