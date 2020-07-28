import React from 'react'
import './Nav.css'
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@material-ui/icons';



const nav = () => {
    return (
        <Navbar className="container app-nav"  expand="lg" sticky="top">
         <Navbar.Brand >IICHUB-BLOG</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto my-nav">
                    {/* <Nav.Link>
                        Why Multi-tenancy
                        </Nav.Link>
                    */}
                </Nav>
                <div className="ml-auto btn-container">
                    {/* <FacebookIcon />    
                    <InstagramIcon />
                    <TwitterIcon /> */}
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default nav