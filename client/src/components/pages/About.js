// styles
import '../../styles/about.scss'
// component
import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import Me2 from '../../imgs/Me2.JPG'

class About extends Component {
    render (){
        return(
            <div className='main'>
                <Container className='container'>
                    <Row>
                        <Col>
                            <h2>Who I am</h2>
                            <p> Hiya , my name is James Klostermeyer Jr. and I work as a Freelance Web Developer in Lenoir, North Carolina.
                                I have over 10 years experience in many things computers and have always had a passon for programming, electronic, and
                                being creative. I want to build your next website! I recently graduated from Full Sail University with a Bacholors in Web Design and Development
                                and decided I wanted to freelance and work with local small businesses and mom & pop shops. Even if you're not one of those,
                                please <Link to='/hire'>contact me</Link>. I would be honored to build your next website or webapp for you. 
                            </p>
                        </Col>
                        <Col>
                            <img 
                            className="imgClass"
                            src={Me2} 
                            alt='Coding on a Mac'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default About