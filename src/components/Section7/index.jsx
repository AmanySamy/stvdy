import React from 'react'
import Carousel from 'react-material-ui-carousel'
import StarIcon from '@mui/icons-material/Star';
import data from "../../data.json"

export default function Section7() {

    return (
        <section className="section7">
            <div className="container">
                <h3 className="section-title">{data.section7.title}</h3>
                <div className="row my-5">
                    {data.section7.stats.map((stat, index) => (
                        <div className="col-md-3 col-6" key={index}>
                            <div className="item">
                                <span>{stat.count}</span>
                                <h4>{stat.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Carousel className='carousel'>
                            {data.section7.slides.map((item, i) => (
                                <div className="review-item text-start d-flex" key={i}>
                                    <img src={item.img} alt={item.name} className="img-fluidv" />
                                    <div className="item-content">
                                        <h3 className="title">{item.name}</h3>
                                        <h4 className="sub-title">{item.jobTitle}</h4>
                                        <p className="desc">{item.desc}</p>
                                        <ul className="reviews list-unstyled d-flex">
                                            {item.Review.map((R, i) => (
                                                <li key={i}><StarIcon /></li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3 className="title">{ data.section7.Box.title }</h3>
                            <p className="desc">{ data.section7.Box.desc }</p>
                            <button className='about-button'>{ data.section7.Box.link }</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
