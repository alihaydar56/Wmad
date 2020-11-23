import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCoffee} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const HeaderComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand>
        <FontAwesomeIcon icon={faCoffee}  style={{color:"blue",width:"100px",height:"50px"}}/>
        </NavbarBrand>
        <NavbarBrand href="/" className="mr-auto" style={{fontSize:"50px",fontFamily:"sans-serif"}}><i>WMAD</i></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/"><Link to="/anasayfa"><strong>ANASAYFA</strong></Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"><Link to="/hakkında"><strong>HAKKIMIZDA</strong></Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Link to="/projeler"><strong>HİZMETLERİMİZ</strong></Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;