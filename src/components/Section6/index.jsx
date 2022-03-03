
import React from 'react'
import data from "../../data.json"

export default function Section6() {
    return (
        <section className="section6">
            <div className="container">
                <div className="row" style={{ alignItems: 'center' }}>
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3 className="title">{data.section6.Box.title}</h3>
                            <p className="desc">{data.section6.Box.desc}</p>
                            <button className='about-button'>{data.section6.Box.link}</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cards">
                            {data.section6.cards.map((card, index) => (
                                <div className="card" key={index}>
                                    <div className="img-container">
                                        <span>{ card.num }</span>
                                        <h3 className="card-title">{card.title}</h3>
                                    </div>
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
