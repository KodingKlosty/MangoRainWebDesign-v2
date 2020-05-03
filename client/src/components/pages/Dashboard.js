import '../../styles/dashboard.scss'
import React, {Component} from 'react'
import { Row, } from 'reactstrap';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {

        } // end of state
    } //end of constructor

    render(){
        return(
            <div className='main'>
                    <Row className='rowCtnr'>
                        <h2>Welcome to your Dashboard</h2>
                    </Row>
                    <Row className='rowCtnr'>
                        <h3>The current progress of your website is</h3>
                    </Row>
                    <Row className='rowCtnr'>
                        <h4>10%</h4>
                    </Row>
                    <Row className='rowCtnr'>
                        <progress value="10" max="100"></progress>
                    </Row>
                    <Row className='rowCtnr' >
                        <h3>You Currently don't have any documents</h3>
                    </Row>
            </div>
        )
    }

}

export default Dashboard