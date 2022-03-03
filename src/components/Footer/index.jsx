import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 list1">
                        <h5>Study</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
                        </p>
                    </div>
                    <div className="col-md-4 desc">
                        <h5>Nos services</h5>
                        <ul>
                            <li>Avis clients</li>
                            <li>Mentions légales</li>
                            <li> Plan du site</li>
                            <li>Blog d’Idéematic</li>
                            <li>Le dictionnaire du digital</li>
                            <li>‹ Notre boutique /›</li>
                        </ul>
                    </div>
                    <div className="col-md-4 subscribe">
                        <h5>Sign up for Special Offers!</h5>
                        <FormControl className="formdesgin">
                            <input placeholder="Mail" />
                            <button>Subcribe</button>
                        </FormControl>
                    </div>
                </div>
            </div>
        </footer >
    )
}
