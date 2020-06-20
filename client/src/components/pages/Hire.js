//styles
import '../../styles/hireMe.scss'
// components
import React, {Component} from 'react'
import { Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Container,
    } from 'reactstrap'


class Hire extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHuman: false,
            companyName: null,
            requesterName: null,
            message: null
        }
    }

    handleInputChange = evn => {
        
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value 
        });
    }

    onloadCallback = () => {
        console.log('captcha loaded')
        this.setState({isHuman: true})
    }

    verifyCallback = (res) => {
        if(res){
            this.setState({isHuman: true})
        }
        else {
            this.setState({isHuman:false})
        }
    }

    humanCheck = (event) => {
        alert("Your form was recieved successfully")
        this.props.history.push('/')
    }

    render (){
        return(
            <div className='main'>
               <Container className='hireForm'>
                   <Form onSubmit={this.humanCheck}>
                       <FormGroup className='subHeader'>
                            <h2>Form is Currently Broken. Please do not fill it out. It will not reach me.</h2>                    
                       </FormGroup>
                       <FormGroup>
                           <Label className='label'>Company Name:</Label>
                           <Input type="text" name="companyName" onChange={this.handleInputChange}/>
                       </FormGroup>
                       <FormGroup>
                           <Label className='label'>Name:</Label>
                           <Input type="text" name="requesterName" onChange={this.handleInputChange}/>
                       </FormGroup>
                       <FormGroup>
                           <Label className='label'>What can I help you with?</Label>
                           <Input type='textarea' name="message"onChange={this.handleInputChange}/>
                       </FormGroup>
                       <Button className="submitBtn" type='submit'>Submit</Button>
                   </Form>
               </Container>
            </div>
        )  // End Return
    } // End Render
}

export default Hire

/*
    handleInputChange = evn => {
        
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value 
        });
    }

    If you would like to contact me please fill out the form below and click submit
*/