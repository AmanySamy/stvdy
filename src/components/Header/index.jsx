import React from 'react'
import Navbar from '../Navbar'

export default function Header() {
    return (
        <section className="header" style={{ background: "url('/img/background_header.png')" }}>
            <Navbar />
            <div className="header-content">
                <div className="container text-start">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="content">
                                <h3 className="sub-title">Advanced Platform</h3>
                                <h1 className="title">
                                    Take your team to next level
                                </h1>
                                <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                                <button>About Us</button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img src="/img/report1.png" alt="" className="report img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sponsers">
                <div className="container">
                    <div className="sponsers-container">
                        <div className="sponser">
                            <img src="/img/client-1.png" alt="" />
                        </div>
                        <div className="sponser">
                            <img src="/img/client-1.png" alt="" />
                        </div>
                        <div className="sponser">
                            <img src="/img/client-1.png" alt="" />
                        </div>
                        <div className="sponser">
                            <img src="/img/client-1.png" alt="" />
                        </div>
                        <div className="sponser">
                            <img src="/img/client-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
