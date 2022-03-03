import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "../../data.json"

export default function Section3() {
    return (
        <section className="section3">
            <div className="section3_container ">
                <div className="row m-0 align-items-center">
                    <div className="col-md-6 p-0" style={{ borderRadius: '15px',overflow: 'hidden'}}>
                        <img src="/img/report.png" alt="" className="report img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3>{data.section3.Box.title}</h3>
                            <p>{data.section3.Box.desc}</p>
                            <a href=""> {data.section3.Box.link} <ArrowForwardIcon /> </a>
                        </div>
                    </div>

                    <img src="/img/Rectangle.png" alt="" className="bg " />
                </div>

            </div>
        </section>
    )
}
