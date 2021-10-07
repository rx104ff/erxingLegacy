import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Label, Button, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import ErxingLogo from './Resource/Image/erxing_logo.png';
import './AppNavbar.css';

export default class AppNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/"><img src={ErxingLogo} class="erxing-logo"/></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/aboutDog">关于导盲犬</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/aboutUs">关于我们</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                在线申请
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem tag={Link} to="/dogApplication">
                                    导盲犬申请
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/adoptionApplication"> 
                                    领养家庭申请
                                </DropdownItem>
                                <DropdownItem>
                                    寄养家庭申请
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}