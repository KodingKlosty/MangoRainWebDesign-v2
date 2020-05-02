// styles import
import  '../../styles/landing.scss'

// needed components
import React, {Component} from 'react'
import { Container,Row,Col } from 'reactstrap'
import Me1 from '../../imgs/Me1.png'

class Landing extends Component {
    render (){
        return(
            <div className='main'>
                <Container className='mainContainer'>
                    <Row  lg='2'>
                        <Col className='eightyPx'>Hire me to build your next website</Col>
                        <Col><img className="imgClass"  src={Me1} alt="Web Designer"/> </Col>
                    </Row>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default Landing