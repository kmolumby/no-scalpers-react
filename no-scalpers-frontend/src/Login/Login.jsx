import React, {Component} from "react";
import { Form, Label, Button, Card, CardTitle, CardText, CardBody, Col, Input, Row} from "reactstrap";
import './Login.css'
import Center from 'react-center'

class Login extends Component {
    render(){
        return(
            <div className="login-page">
             
                    <Center>
                        <Card className="login-card"> 
                            <Form onSubmit={this.props.handleLogin} className="login-forms">
                                <legend>LOGIN</legend>
                                <Row className="login-inputs">
                                    <Input  name="username" onChange={this.props.handleInputs} placeholder="username"></Input>
                                
                                </Row>
                                <Row className="login-inputs"> 
                                    <Input  name="password" onChange={this.props.handleInputs} placeholder="password" >password</Input>
                                </Row>
                                <Button className="submit-button">Submit</Button>
                            </Form>
                            <div className="spacer"/>
                            <div className="spacer"/>
                            
                            <Form onSubmit={this.props.handleRegistration} className="login-forms" >
                                <legend>REGISTER</legend>
                                <Row className="login-inputs">
                                        <Input  name="username" onChange={this.props.handleInputs} placeholder="username"></Input>
                                    
                                    </Row>
                                    <Row className="login-inputs"> 
                                        <Input  name="password" onChange={this.props.handleInputs} placeholder="password" >password</Input>
                                    </Row>
                                    <Button className="submit-button">Submit</Button>
                            </Form>
                            </Card>   
                    </Center>
                        
                
                
            </div>
        )
    }
}

export default Login;