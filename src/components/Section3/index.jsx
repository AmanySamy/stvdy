import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function Section3() {
  return (
    <section className="section3" style={{ background: "url('/img/Rectangle.png')" }}>
        <div className="section3_container">
            <div className="row">
                <div className="col-md-7" >
                    <img src="/img/report1.png" alt="" className="report img-fluid"/>
                </div>
                <div className="col-md-5">
                   <div className="desc">
                       <HorizontalRuleIcon/>
                            <h3>
                            Best Platform for the Technological Era
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <a href="">
                                
                                Learn About Our Success <ArrowForwardIcon></ArrowForwardIcon>
                                
                            </a>
                        </div>
                </div>


            </div>

        </div>
    </section>
  )
}
