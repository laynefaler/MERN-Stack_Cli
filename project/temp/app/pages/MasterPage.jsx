import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand, Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

class MasterPage extends Component {

    render() {
        const {children} = this.props;
        return (
            <div>
                <Navbar fixedTop inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">MERN Stack Cli</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                
                {children}
            </div>
            )
        }
}

export default connect(state => ({
}))(MasterPage)