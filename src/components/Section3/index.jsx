import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Section4 from '../section4';
import Section2 from '../Section2';

export default function Section3() {
    return (
        <section className="section3">
            {/* <Section2 /> */}
            <div className="section3_container ">
                <div className="row m-0">
                    <div className="col-md-6 p-0" style={{ borderRadius: '15px',overflow: 'hidden'}}>
                        <img src="/img/report.png" alt="" className="report img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3>
                                Best Platform for the Technological Era
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <a href=""> Learn About Our Success <ArrowForwardIcon /> </a>
                        </div>
                    </div>

                    <img src="/img/Rectangle.png" alt="" className="bg " />
                </div>

            </div>
            {/* <Section4 /> */}
        </section>
    )
}