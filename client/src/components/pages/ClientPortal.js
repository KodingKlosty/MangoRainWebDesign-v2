//styles import
import '../../styles/clientPortal.scss'

// components import
import React, {Component} from 'react'
import { Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Container} from 'reactstrap'


class ClientPortal extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }

    handleChange = evn => {
        
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value 
        });
    }

    loginUser = evn => {
        evn.preventDefault()
        
    }

    render (){
        return(
            <div className='main'>
                <Container className='loginForm'>
                    <h2>Please Login Below</h2>
                    <Form onSubmit={this.loginUser}>
                        <FormGroup>
                            <Label className="label">Username: </Label>
                            <Input name="username" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="label">Password: </Label>
                            <Input type='password' name='password' onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button className='loginBtn' href='/dashboard'>Login</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default ClientPortal