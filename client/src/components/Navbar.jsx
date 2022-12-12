import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiTacos } from 'react-icons/all';
import { useContext } from 'react';
import { appContext } from '../App';
import './navbar.css'


const Navbar1 =()=> {
  const {setDisplayMenuItems, setDisplayCatItems, setHomeButton, setModifyButton, 
  setChangeMenuItem, setDeleteMenuItem}=useContext(appContext);
  //====================click events====================//
  const handleClick = () => {
    setDisplayMenuItems(true);
    setDisplayCatItems(false);
    setHomeButton(false);
    setModifyButton(false);
    setChangeMenuItem(false);
    setDeleteMenuItem(false)
    };
    const handleClick2 = () => {
      setDisplayCatItems(true);
      setDisplayMenuItems(false);
      setHomeButton(false);
      setModifyButton(false);
      setChangeMenuItem(false);
      setDeleteMenuItem(false);
    };
      const handleClick3 = () => {
        setHomeButton(true);
        setDisplayMenuItems(false);
        setDisplayCatItems(false);
        setModifyButton(false);
        setChangeMenuItem(false);
        setDeleteMenuItem(false)
      };
        const handleClick4 = () => {
          setModifyButton(true);
          setDisplayMenuItems(false);
          setDisplayCatItems(false);
          setHomeButton(false);
          setChangeMenuItem(false);
          setDeleteMenuItem(false);
        };
        const handleClick5 = () => {
          setChangeMenuItem(true);
          setModifyButton(false);
          setDisplayMenuItems(false);
          setDisplayCatItems(false);
          setHomeButton(false);
          setDeleteMenuItem(false);
        };
        const handleClick6 = () => {
          setDeleteMenuItem(true);
          setChangeMenuItem(false);
          setModifyButton(false);
          setDisplayMenuItems(false);
          setDisplayCatItems(false);
          setHomeButton(false);
        }
      

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <GiTacos />
        <Navbar.Brand id='brandon' href="#home">Los Portales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={handleClick3}>Home</Nav.Link>
            <Nav.Link href="#link">about us</Nav.Link>
            <NavDropdown title="view our menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={handleClick2}>
              Categories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={handleClick}>
                Menu Items
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4' onClick={handleClick5}>Alter Menu Item By Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={handleClick4}>Post a New Item to the Menu</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5' onClick={handleClick6}>Delete Menu Item</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};


export default Navbar1;

