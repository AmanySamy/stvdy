import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Section2() {
    return (
        <section className="section2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="custom-card">
                            <h3 className="title">
                                The best business solution for you
                            </h3>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <a href=""> Learn About Our Success <ArrowForwardIcon /> </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cards">
                            <div className="card">
                                <div className="img-container" style={{ background: "#e84438" }}>
                                    <img src="/img/Icon1.png" alt="" />
                                </div>
                                <h3 className="card-title">Scale your Activity</h3>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                </p>
                            </div>
                            <div className="card">
                                <div className="img-container" style={{ background: "#65c6ad" }}>
                                    <img src="/img/Icon2.png" alt="" />
                                </div>
                                <h3 className="card-title">Bootcamps</h3>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                </p>
                            </div>
                            <div className="card">
                                <div className="img-container" style={{ background: "#cf74f8" }}>
                                    <img src="/img/icon3.png" alt="" />
                                </div>

                                <h3 className="card-title">Scale your Activity</h3>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod
                                </p>
                            </div>
                            <div className="card">
                                <div className="img-container" style={{ background: "#e84438" }}>
                                    <img src="/img/Icon4.png" alt="" />
                                </div>
                                <h3 className="card-title">Scale your Activity</h3>
                                <p className="card-desc">
                                    Lorem ipsum dolor sit amet,
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
