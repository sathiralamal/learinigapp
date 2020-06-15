import React, { Component } from 'react';
import { Form, FormGroup, Input, Row, Col, Label, Button,Container, Table } from 'reactstrap';
import Axios from 'axios';
//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake

class ViewClass extends Component {

    constructor(props) {
        super(props);
        this.state={ 
            ClassData:[],
            editemode:false,
            editerowid:'',
            isloaded:false,
            // userid:localStorage.getItem('USER_ID')
        }
    }


    componentDidMount() {
        this.loadCalssData();
    }

    loadCalssData =async ()=>{

        let userid= await localStorage.getItem('USER_ID')
        try{
            let res =await Axios.get(global.backend+'/classes/'+userid)
                this.setState({
                    ClassData:res.data,
                    isloaded:true
                })
                console.log(res.data);
        }
        catch(err){
            console.log(err);
   
        }

    }

    deleteclasse=(class_id)=>{
        console.log("call delete btn");
        
        Axios.delete(global.backend+'/classes/'+class_id)
        .then(res=>{
            this.loadCalssData()
        })
        .catch(err => console.log(err))
    }


    tableGeneate=()=>{
      return this.state.ClassData.map(lec=>{
            return(
                <tr key={lec._id}>
         
            <td>{lec.subject}</td>
                <td>{lec.hall}</td>
                <td>{lec.time}</td>
                <td>{lec.year}</td>
                <td>{lec.day}</td>
                <td><Button color="warning" size="sm" onClick={()=>this.deleteclasse(lec._id)}>Delete</Button>                
                </td>
               
              </tr>
            ) 
      }
          
      )
            
    
    }





    render() {
        return (
            <Container>
               <Row>
               <Table size="sm" responsive>
      <thead>
        <tr>
          
          <th>Subject</th>
          <th>Place</th>
          <th>Time</th>
          <th>Year</th>
          <th>Day</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

       {this.tableGeneate()}
    
      </tbody>
    </Table>
               </Row>
              
            </Container>
        );
    }
}

export default ViewClass;