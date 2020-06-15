import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Welocme from '../../images/welcome.jpg'
import Logingmage from '../../images/loging.jpg'
//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake
import Axios from 'axios';



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            data:[],
            isError:false
        }
    }

    componentDidMount() {
            // console.log(localStorage.getItem('USER_NAME'));
            
    }

    navtoRegister=() => {
        window.location="/register"
    }

    handeleUsername=(e) => {
        this.setState({username: e.target.value})
    }

    handelePassword=(e) => {
        this.setState({password: e.target.value})
    }

    loging=(e) => {
        const authuser={
            username:this.state.username,
            password:this.state.password
        }

        Axios.post(global.backend+'/users/loging',authuser)
              .then(async res => {
                  console.log(res.data[0]);
                  
                let user_data= await res.data[0];

                if( res.data.length>0){
               await localStorage.setItem('USER_ID', user_data._id);
               await  localStorage.setItem('USER_NAME', user_data.username);
               await localStorage.setItem('USER_TYPE', user_data.usertype);

                window.location.href="/"
                } else {
                    this.setState({isError:true})
                    setTimeout(() => {
                        this.setState({
                            isError:false,
                            password:'',
                            username:'',
                        })
                    },1500)
                }

              })  

             
    }

    clear =() => {
            this.setState({
                username:'',
                password:'',
            })
    }

    form=()=>{
        return(
            <div>
                 <h4>Login</h4>
                    <Form method="post">
                         <FormGroup>
                             <Input id="username" name="username" value={this.state.username} placeholder="Username" onChange={this.handeleUsername}/>
                        </FormGroup>

                        <FormGroup>
                             <Input id="password"  name="password" value={this.state.password} placeholder="Password" onChange={this.handelePassword}/>      
                        </FormGroup>
                        <FormGroup>
                             {this.state.isError?  <Alert color="warning" >User name or Password incorrect</Alert>:''}
                        </FormGroup>
                        </Form>

                     

                    <Row>
                        <Col md={6}>
                             <Button  onClick={this.loging} color="success"size="sm" block>Sign</Button>
                        </Col>
                        <Col md={6}>
                            <Button type="reset" color="danger" onClick={this.clear} size="sm" block>Clear</Button>
                        </Col>
                               
                            
                    </Row>   
                    <a href="/register"><p>Create Account</p></a>  
                    </div>
        )
    }

    afterLoging=()=>{
        return(        

            <div>
                <h4>To Manager Leacturs Navigate to Dashbord</h4>
                <Button style={dashbordbtn} color="primary" size="lg"onClick={()=>window.location.href="/dashbord"} >Go To Dashbord</Button>
                <img style={secondimageStye} src={Logingmage}></img>
            </div>

            )
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col style={imageStyle}   >
                        <h4>Online Learing Management System </h4>
                        <img src={Welocme}></img>
                    </Col>
                    <Col md={4}>
                      <br/> 
                       
                        { (localStorage.getItem('USER_NAME')===null)? this.form(): this.afterLoging() }
                        
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;


const imageStyle={
    marginTop:'8%'
}
const secondimageStye={
    width: '90%'
}


const dashbordbtn={
    boxShadow: '-1px 0px 12px #929292',
    position: 'relative'
}