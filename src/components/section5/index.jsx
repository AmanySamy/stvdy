import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "../../data.json"

export default function Section5() {
    return (
        <section className="section5" >
            <div className="section3_container ">
                <div className="row m-0" style={{alignItems: 'center'}}>
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3>{data.section5.Box.title}</h3>
                            <p>{data.section5.Box.desc}</p>
                            <a href=""> {data.section5.Box.link} <ArrowForwardIcon /> </a>
                        </div>
                    </div>
                    <div className="col-md-6  img-section" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <img src={data.section5.image} alt="" className="report img-fluid " />
                    </div>
                </div>
            </div>
            <img src="/img/Rectangle.png" alt="" className="bg " />
        </section>
    )
}
