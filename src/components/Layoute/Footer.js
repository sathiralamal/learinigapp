import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake

class Footer extends Component {
    render() {
        return (
            <div style={footerStye}>
                <Navbar>
                    <p>Online Learing Managemet System</p>
                    <h6>create by :  S.D.S.L Dissanayake (IT18045840 )  </h6>
                   
                </Navbar>
            </div>
        );
    }
}



const footerStye={

    position:'fixed',
    backgroundColor: '#3C3D3D',
    bottom: '0',
    width: '-webkit-fill-available'
}
export default Footer;