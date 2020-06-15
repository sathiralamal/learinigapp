import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
//Student ID :IT18045840
//Student Name :S.D.S.L Dissanayake
class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            collapsed:true,

        };
    }

    toggleNavbar =()=>{
        this.setState({ collapsed:!this.state.collapsed});

    }

    logOut =()=>{
        localStorage.clear();
        window.location.href="/"

    }


    render() {
        return (
            <div style={navigator_style}>
              <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">
                    <h4>OLMS</h4>
                        
                    </NavbarBrand>
                    <div style={username_div}>
                        <p style={usernametxt}>{localStorage.getItem('USER_NAME')} </p>
                    </div>
                           
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar style={menu_style}>
                         <Nav navbar>
                            <NavItem>
                                <NavLink href="/register/">Registation</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dashbord">Dashbord</NavLink>
                            </NavItem>
                            <NavItem>
                              { (localStorage.getItem('USER_NAME')===null)?'':<Button color="primary" onClick={this.logOut}>Logout</Button>}  
                            </NavItem>

                        </Nav>
                        </Collapse>
             </Navbar>
            </div>
        );
    }
}

const navigator_style = {
    backgroundImage: 'linear-gradient(to right top, #00f9a2, #4af786, #6ef468, #8cf046, #a8eb12)',
    boxShadow: '-7px -8px 14px 2px #232323'

}

const menu_style = {
    backgroundColor: 'white',
    borderRadius:'5px',
    

}

const username_div={
    paddingTop: '10px',
    paddingLeft: '3px',
    paddingRight: '10px'
}

const usernametxt={
    backgroundColor: 'azure',
    padding: '2px',
    borderRadius: '10px'
}



export default Header;