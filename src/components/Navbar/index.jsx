import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Browser', 'Bootcamps', 'How it Works', 'Testemonials'];

export default function Navbar() {
    const [Toggle, setToggle] = useState(false)
    return (

        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand logo" href="#">ST <span>V</span> DY</a>
            <button className="navbar-toggler" type="button" onClick={() => setToggle(!Toggle)}>
                <MenuIcon className="navbar-toggler-icon" />
            </button>

            <div className={`collapse navbar-collapse ${Toggle? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {pages.map((page) => (

                        <li className="nav-item active">
                            <a className="nav-link" href="#">{page} </a>
                        </li>
                    ))}
                </ul>
                <button className="about-button">about us</button>
            </div>
        </nav>


    )
}
