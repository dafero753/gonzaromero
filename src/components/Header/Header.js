import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Img from '../static/cinco.svg'
import Menu from '../Menu'
import './styles.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){
        return (
            <div className="header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Collapse href="#home">
                    <div className="logo">
                        <img 
                            alt=""
                            src={Img}
                            width="120"
                            height="120"
                            className="d-inline-block align-top"
                        />
                        <div className="name">
                            <div className="gonzalo">
                            {'Gonzalo Romero'}
                            </div>
                            <div className="real">
                            {'Real state specialist'}
                            </div>
                        </div>
                    </div>
                    </Navbar.Collapse>
                    <Menu />
                </Navbar>
            </div>
        )
    }
}

