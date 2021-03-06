// styles
import '../../styles/about.scss'
// component
import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import Me2 from '../../imgs/Me2.png'
import linkedin from '../../imgs/linkedin.png'
import github from '../../imgs/github.png' 

class About extends Component {
    render (){
        return(
            <div className='main'>
                <Container className='container'>
                    <Row>
                        <Col className="listGroupCon">
                            <h2>Who I am</h2>
                            <p> HEY!  My name is James Klostermeyer Jr. and I work as a Freelance Web Developer in Lenoir, North Carolina.
                                I have over 10 years experience in many things computers and have always had a passion for programming, electronics, and
                                being creative. I want to build your next website! I recently graduated from Full Sail University with a Bachelors in Web Design and Development
                                and decided I wanted to freelance and work with local small businesses and mom & pop shops. Even if you're not one of those,
                                please contact me via the LinkedIn icon below. I would be honored to build your next website or webapp for you.

                            </p>
                            <Row>
                                <a href="https://www.linkedin.com/in/james-klostermeyer-jr-42b49889/">
                                    <img className="socialMediaIcons" src={linkedin} alt='linkedin icon provided by freepik on flaticon.com' />
                                </a>
                                <a href="https://www.github.com/KodingKlosty">
                                   <img className="socialMediaIcons" src={github} alt='GitHub icon' />
                                </a>
                            </Row>
                        </Col>
                        <Col>
                            <img 
                            className="imgClass"
                            src={Me2} 
                            alt='Me in Pittsburg Started it Tee'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default About