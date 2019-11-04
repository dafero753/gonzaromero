import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './styles.scss'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){
        return (
            <Nav id="basic-navbar-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About me</Nav.Link>
                <Nav.Link href="#card">Property search</Nav.Link>
                <NavDropdown title="Seller´s info" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">What´s my home worth?</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Buyer´s info" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Get free reports</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#text-email">Contact me</Nav.Link>
            </Nav>
        )
    }
}

