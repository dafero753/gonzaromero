import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import Cards from '../Cards'
import Img1 from '../static/slide1.1.jpeg'
import Img2 from '../static/slide1.2.jpeg'
import Img3 from '../static/slide1.3.jpeg'
import './styles.scss'

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(){
        return (
            <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Find the perfect place</h3>
                <p>Your dreamed home, just rigth here.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            <Cards />      
           </div>
        )
    }
}

