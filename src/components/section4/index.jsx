import React from 'react'
import Carousel from 'react-material-ui-carousel'
import data from "../../data.json"

export default function Section4() {
    return (
        <section className="section4">
            <div className="container">
                <h3 className="sub-title">{data.section4.subTitle}</h3>
                <h2 className="title">{data.section4.title}</h2>
                <p className="desc">{data.section4.desc}</p>
                <Carousel className='carousel'>
                    {data.section4.slides.map((item, i) => (
                        <div className="m" key={i}>
                            <img src={item.img} alt={item.name} className="img-fluid" />
                        </div>
                    ))
                    }
                </Carousel>
            </div>
        </section>
    )
}
