import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'
import {NavLink as RRDNavLink} from 'react-router-dom'
import mangoRainLogoCrop from '../../imgs/mangoRainLogoCrop.svg'
import '../../styles/header.scss'
import PropTypes from 'prop-types'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){
        return(
            <div className='headerdiv'>
                <div> 
                    <Navbar className="navImg">
                            <h1>Mango Rain</h1>
                            <img 
                                src={mangoRainLogoCrop}
                                height="150px"
                                width="150px"
                                alt="Mango Rain Logo" 
                            />
                            <h1>Web Design</h1>
                    </Navbar>
                    <Nav className='navContainer'>
                        <NavItem>
                            <NavLink  
                                tag={RRDNavLink} 
                                className="allLinks"  
                                activeClassName='activeLink' 
                                exact to="/">
                                    Home 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  
                                tag={RRDNavLink} 
                                className="allLinks"  
                                activeClassName='activeLink' 
                                to="/portfolio">
                                    Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink  
                                tag={RRDNavLink} 
                                className="allLinks"  
                                activeClassName='activeLink' 
                                to="/about">
                                    About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  
                                tag={RRDNavLink} 
                                className="allLinks"  
                                activeClassName='activeLink' 
                                to="/hire">
                                    Hire Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  
                                tag={RRDNavLink} 
                                className="allLinks"  
                                activeClassName='activeLink' 
                                to="/portal">
                                Client Portal
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div className='breakerBar'>
                </div>
            </div> // End Main div
        )  // End Return
    } // End Render
}

NavLink.propTypes = {
    active: PropTypes.bool
}

export default Header