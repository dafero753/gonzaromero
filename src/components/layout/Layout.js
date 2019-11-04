import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './styles.scss'
import About from '../About'
import Contacts from '../Contacts'


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){
        return (
            <Container>
                <Header />                
                <Body /> 
                <About />  
                <Contacts />             
                <Footer />
            </Container>
        )
    }
}

