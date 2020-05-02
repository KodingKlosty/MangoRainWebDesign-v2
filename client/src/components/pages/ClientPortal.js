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
    render (){
        return(
            <div className='main'>
                <Container className='loginForm'>
                    <h2>Please Login Below</h2>
                    <Form>
                        <FormGroup>
                            <Label className="label">Username: </Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label className="label">Password: </Label>
                            <Input type='password' />
                        </FormGroup>
                        <FormGroup>
                            <Button className='loginBtn'>Login</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default ClientPortal