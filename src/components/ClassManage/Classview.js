import React, { Component } from 'react';
import Axios from 'axios';
import { Row, Input, Container, Form } from 'reactstrap';

//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake

class Classview extends Component {

    constructor(props) {
        super(props);
        this.state={
            class_id:'',
            class_subject:'',
            lecture_name:'',
            date:'',
            time:'',
            classData:[],
            selectedFile: null
        }
    }

componentDidMount() {

    const search = this.props.location.search
    const params = new URLSearchParams(search);

    const IdFromURL=params.get('class_id')
    console.log(IdFromURL);

    if(IdFromURL === null){
        alert("No orders created!!");
        window.location = "http://localhost:3000";
    }else{
        this.setState({
            class_id:IdFromURL
        })

        Axios.get(global.backend+'/classes/getclass/'+IdFromURL)
            .then(response =>{
                this.setState({
                    classData:response.data
                })
            })
            .catch(error => console.log(error))
    }


    

}

onChangeHandler=event=>{
   
    this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    console.log(event.target.files[0])

}

onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
}

    render() {
        return (
            <Container>
                {/* <br/>
               <h5>{this.state.classData.subject}</h5>
               <Row>
               <h5>Add resource to : {this.state.classData.subject}</h5>
               <input type="file" name="file" onChange={this.onChangeHandler}/>
               <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 


               </Row>
               <Row>
                   
                </Row> */}
            </Container>
        );
    }
}

export default Classview;