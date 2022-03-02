import { Button } from '@mui/material'
import React from 'react'

export default function Section6() {
    return (
        <section className="section6">
            <div className="container">
                <div className="row" style={{alignItems:'center'}}>
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
                    <div className="col-md-6">
                        <div className="cards">
                            <div className="card">
                                <div className="img-container">
                                    <span>1</span>
                                    <h3 className="card-title">Market Research</h3>
                                </div>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                </p>
                            </div>
                            <div className="card">
                                <div className="img-container">
                                    <span>2</span>
                                    <h3 className="card-title">Market Research</h3>
                                </div>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                </p>
                            </div>
                            <div className="card">
                                <div className="img-container">
                                    <span>3</span>
                                    <h3 className="card-title">Market Research</h3>
                                </div>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
