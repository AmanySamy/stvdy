import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 list1">
                    <h5>
                        Study
                    </h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
                    </p>
                </div>
                <div className="col-md-4 desc">
                    <ul>
                        <li>
                            <h6>
                            Nos services

                            </h6>
                            <p >
                            Avis clients
                            Mentions légales
                            Plan du site
                            Blog d’Idéematic
                            Le dictionnaire du digital
                            ‹ Notre boutique /›
                            </p>
                        </li>
                        
                    </ul>

                </div>
                <div className="col-md-4">
                    <ul>
                        <li className="formTitle">
                        
                            Sign up for Special Offers!
                            <FormControl className="formdesgin">
                                <input placeholder="Mail"/>
                                <button>Subcribe</button>
                                
                                
                            </FormControl>

                            
                        </li>
                    </ul>

                </div>

                </div>

        </div>

    </footer>
  )
}
