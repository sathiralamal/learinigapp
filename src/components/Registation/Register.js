import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Label, Input, Form, Button } from 'reactstrap'
import axios from 'axios';
import Regimage from '../../images/register.jpg'
//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake
export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {

            firstname:'',
            lastname:'',
            birthday:'',
            email:'',
            address:'',
            password:'',
            usertype:'accadamic',
            uid:''
        }
    }

    handelefirstname =(e) => {
        this.setState({firstname: e.target.value})
    }

    handelelastname =(e) => {
        this.setState({lastname: e.target.value})
    }

    handelebirthday =(e) => {
        this.setState({birthday: e.target.value})
    }

    handeleemail =(e) => {
        this.setState({email: e.target.value})
    }

    handeleaddress =(e) => {
        this.setState({address: e.target.value})
    }

    handelepassword =(e) => {
        this.setState({password: e.target.value})
    }

    handeleusertype =(e) => {
        this.setState({usertype: e.target.value})
    }

    handeleuid =(e) => {
        this.setState({uid: e.target.value})
    }

    onSubmit =  (e) => {
        e.preventDefault();
        console.log('call onsubmit');
        console.log(this.state.firstname);

        const newuser = {
            username:this.state.firstname+"_"+this.state.lastname,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            birthday:this.state.birthday,
            email:this.state.email,
            address:this.state.address,
            password:this.state.password,
            usertype:this.state.usertype,
            uid:this.state.uid
            
         }


         axios.post(global.backend+'/users/',newuser)
               .then(async response =>  {
                   console.log(response.data);
                       let user_data= await response.data;
                       localStorage.setItem('USER_ID', user_data._id);
                       localStorage.setItem('USER_NAME', user_data.username);
                       localStorage.setItem('USER_TYPE', user_data.usertype);

                                     
               }) 
               
               .catch(err=> console.log('Error in create new user'))

               
               this.cleaner()
         
    }


    cleaner =() => {
        this.setState({
            firstname:'',
            lastname:'',
            birthday:'',
            email:'',
            address:'',
            password:'',
            usertype:'',
            uid:''
        })
    }




    render() {
        return (
            <Container>
            <Row>
                <Col style={imageStyle}>
                    <img src={Regimage}></img>
                </Col>
                <Col>
                <p></p>
                     <h4>Registration</h4>
                     <Form method="post" onSubmit={this.onSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="name" name="FristName" onChange={this.handelefirstname} id="exampleFristName" placeholder="First Name"  required/>
                                </FormGroup>
                            </Col>
                             <Col md={6}>
                                <FormGroup>
                                    <Input type="name" name="LastName" onChange={this.handelelastname} id="exampleLastName" placeholder="Last Name" required />
                                </FormGroup>
                            </Col>
                     </Row>
                        <FormGroup>
                            <Input type="date" name="dob" onChange={this.handelebirthday} id="exampleAddress" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="dob" id="Email" onChange={this.handeleemail} placeholder="Email Address" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="address" name="address" id="exampleAddress2" onChange={this.handeleaddress} placeholder="Address" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="uid" id="exampleAddress2" onChange={this.handeleuid} placeholder="University ID" required/>
                        </FormGroup>
                     <Row form>
                    
                     <Col md={4}>
                         <FormGroup>
                            <Input type="password" name="city" id="exampleCity"  onChange={this.handelepassword} placeholder="Password" required/>
                        </FormGroup>
                     </Col>
                    <Col md={4}>
                        <FormGroup>
                               <select name="cars" id="cars" value={this.state.usertype} onChange={this.handeleusertype}>
                                    <option value="student">Studets</option>
                                    <option value="accadamic">Accadamic Starf</option>
                                    <option value="nonaccadamic">Non Acadmic Starf</option>
                                </select>
                        </FormGroup>
                    </Col>       
                    </Row>

                    <Row form>
                        <Col md={10}>
                            <Button type="submit" style={submitBtnStyle} color="success">Register</Button>
                        </Col>
                        <Col md={10}>
                            <Button type="reset" style={cancelBtnStyle} color="danger"> Cancel</Button>
                        </Col>
                     <Col md={10}>
                         </Col>
                    </Row>
      
                     </Form>
   
                    </Col>
                </Row>
            </Container>
        )
    }


}

const submitBtnStyle={
    position: 'absolute',
    left: '1px'
}


const cancelBtnStyle={
    position: 'absolute',
    left: '20%'
}


const imageStyle={
    marginTop:'8%'
}