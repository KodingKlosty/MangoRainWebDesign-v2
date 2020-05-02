//styles
import '../../styles/portfolio.scss'

// component imports
import React, {Component} from 'react'
import { Container } from 'reactstrap'
import Example from '../functions/carousel'

class Portfolio extends Component {


    render (){

        return(
            <div className='main'>
                <Container className="container">
                    <Example className="carousel"/>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default Portfolio