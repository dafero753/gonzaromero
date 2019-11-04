import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Img1 from '../static/slide1.jpeg'
import Img2 from '../static/slide2.jpeg'
import Img3 from '../static/slide3.jpeg'
import './styles.scss'

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){
        return (
            <CardDeck id="card">
                <Card>
                    <Card.Img variant="top" src={Img1} />
                    <Card.Body>
                    <Card.Title>House 1</Card.Title>
                    <Card.Text>
                        This is the first house bla bla blablabla blabla bla bla bla blablabla blabla bla bla bla blablabla blabla bla.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img2} />
                    <Card.Body>
                    <Card.Title>House 2</Card.Title>
                    <Card.Text>
                    This is the second house bla bla blablabla blabla bla bla bla blablabla blabla bla bla bla blablabla blabla bla.
                  {' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Img3} />
                    <Card.Body>
                    <Card.Title>House 3</Card.Title>
                    <Card.Text>
                    This is the thirth house bla bla blablabla blabla bla bla bla blablabla blabla bla bla bla blablabla blabla bla.
                  
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
        )
    }
}

