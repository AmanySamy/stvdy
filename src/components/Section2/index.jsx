import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "../../data.json"
export default function Section2() {

    return (
        <section className="section2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3 className="title">{data.section2.Box.title}</h3>
                            <p className="desc">{data.section2.Box.desc}</p>
                            <a href=""> {data.section2.Box.link} <ArrowForwardIcon /> </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cards">
                            {data.section2.cards.map((card, index) => (
                                <div className="card" key={index}>
                                    <div className="img-container" style={{ background: card.imgBg }}>
                                        <img src={card.img} alt="" />
                                    </div>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-desc">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
