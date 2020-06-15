import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import AddClass from './AddClass';
import ViewClass from './ViewClass';

//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake
export default class LectureDashbord extends Component {


    constructor(props){
        super(props);
    }

    loadTableData=() => {
        return <ViewClass/>
    }

    render() {
        return (
            <Container>
                <Row>
                    <h5>Lecture Magamet</h5>

                </Row>
                <Row>
                    <Col> 
                           <h5>Add New Class Room</h5>
                           <AddClass reloadData={this.loadTableData}/>

                    </Col>
                    <Col> 
                          <h5>Calss Room List</h5>
                          {this.loadTableData()}
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}
