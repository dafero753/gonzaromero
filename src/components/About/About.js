import React from 'react'
import { Container } from 'react-bootstrap'
import Img from '../static/gonzalo.jpg'
import './styles.scss'

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render(){
        return (
           <Container>
               <div className="about" id="about">
                   <div className="who">
                       <h1>Who am I</h1>
                   </div>
                   <div className="about2" class="shadow p-3 mb-5 bg-white rounded">
                       <div>
                       <img src={Img} alt="Gonzalo" className="gon" />
                       </div>
                       <div>
                           <p className="texto">
                           Welcome to my website! Here you can view properties, save searches and save homes. In addition you can send listings to friends and families. If you save your search criteria the website will send you New and Changed listings every day via email. There is no obligation to use this service and you can cancel at any time.

All listings on my website are certified MLS listings, updated constantly. Enjoy! You have my pledge to give you my most professional service in the Selling or Buying of a property! Please call me at any time to discuss your real estate needs!
                           </p>

                       </div>
                   </div>
               </div>
           </Container>
        )
    }
}

