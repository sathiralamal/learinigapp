import React, { Component } from 'react';
import { Form, FormGroup, Input, Row, Col, Label, Button } from 'reactstrap';
import Axios from 'axios';
//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake
class AddClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lectureId:'',
            lectureName:'',
            lecturePlace:'',
            year:'',
            subject:'',
            day:'Monday',
            time:'',
            
        }
    }


    componentDidMount() {
        let usertype=localStorage.getItem('USER_TYPE');

        if(usertype=='accadamic'){
            let lecid=localStorage.getItem('USER_ID');
            let lecname=localStorage.getItem('USER_NAME');

                this.setState({
                    lectureId:lecid,
                    lectureName:lecname
                })

        }else{
                window.location.href="/"
        }
    }



    handelesubject =(e)=>{
        this.setState({subject: e.target.value})
    }

    handelelecturePlace =(e)=>{
        this.setState({lecturePlace: e.target.value})
    }

    handeleyear =(e)=>{
        this.setState({year: e.target.value})
    }

    handeleday =(e)=>{
        this.setState({day: e.target.value})
    }

    handeletime =(e)=>{
        this.setState({time: e.target.value})
    }


    onCreateClass=(e)=>{

        e.preventDefault()
            console.log("call oncreate class");

            const newClass={
                lecturename:this.state.lectureName,
                lectureid:this.state.lectureId,
                hall:this.state.lecturePlace,
                isdelete:false,
                year:this.state.year,
                subject:this.state.subject,
                day:this.state.day,
                time:this.state.time
            }
            
            Axios.post(global.backend+'/classes/',newClass)
                 .then(res=>{
                     console.log('class added');
                     this.clearText()
                     this.props.reloadData()
                     
                 })   

                 .catch(err=>{console.log('error occurred in create class'+err);
                 })

                 window.location.href="/dashbord";
    }




    clearText=()=>{
        this.setState({
            
            lecturePlace:'',
            year:'',
            subject:'',
            day:'',
            time:'',
        })
    }





    render() {
        return (
            <div>
               <Form methods="post" onSubmit={this.onCreateClass}>
                     <FormGroup>
                         <Input name="subject" value={this.state.subject} id="subject" onChange={this.handelesubject} type="text" placeholder="Subject" required/>
                     </FormGroup> 
                     <FormGroup>

                     <Row>
                        <Col >
                             <Input value={this.state.lectureName} disabled/> 
                        </Col>
                        
                            
                    </Row>  
                         
                    </FormGroup> 
                     <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Input name="place" id="place" value={this.state.place} onChange={this.handelelecturePlace}  type="text" placeholder="place" required/>
                                </FormGroup> 
                            </Col> 
                            <Col md={6}>
                                <FormGroup>
                                <Input name="year" id="year" value={this.state.year} onChange={this.handeleyear} type="text" placeholder="year" required/>
                                </FormGroup> 
                            </Col>                              
                    </Row>  
                    <Row>
                            <Col md={2}>
                                <FormGroup>
                                    <Label>Day :</Label>
                                </FormGroup> 
                            </Col> 
                            
                            <Col md={3}>
                                <FormGroup>
                                    <select value={this.state.day}  onChange={this.handeleday} >
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saterday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select >
                                </FormGroup> 
                            </Col> 
                            <Col md={7}>
                                <FormGroup>
                                <Input name="time" value={this.props.time} id="time" onChange={this.handeletime} type="time" placeholder="time"/>
                                </FormGroup> 
                            </Col>
                    </Row>

                    

                    <Row>
                        <Col md={6}>
                             <Button type="submit" color="primary"size="sm" block>create</Button>
                        </Col>
                        <Col md={6}>
                            <Button type="reset" color="danger" size="sm" onClick={this.clearText} block>clear</Button>
                        </Col>
                            
                    </Row>                              
                     
                </Form>     
            </div>
        );
    }
}

export default AddClass;