import React from 'react';
import "./ShopConfig.css";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, InputGroup, FormControl, Form} from 'react-bootstrap';

const ShopConfig = () => {
    return (
        <div className="shopconfig-container">

                <div className="row">
                    <div className="col-md-2">
                        <nav className="w3-sidebar w3-bar-block w3-black w3-collapse w3-top" style={{width:'250px'}} id="mySidebar">
                            <div class="w3-container w3-display-container w3-padding-16">
                                
                            </div>

                            <div className="w3-padding-64 w3-large " style={{ fontWeight:'bold'}}>
                                    <a href="/" className="w3-bar-item w3-button">Settings</a>
                                    
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'transparent', color:'white', border:'none'}}>
                                            Shop Configuration
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{backgroundColor:'black', color:'white'}}>
                                            <Dropdown.Item href="#/action-1" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Shop Profile</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Branding</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Store Business Hours</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Cut Off Time</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Web Site Configuration</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Country Access</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Manage City</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Credit/Debit Reasons</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>External Interface</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Profit Margins</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Social Media Links</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" style={{backgroundColor:'transparent', color:'white', border:'none'}}>Others</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                            </div>

                        </nav>
                    </div>

                    <div className="col-md-10">
                        <div className="col8-section1">
                            <div className="row">
                                <div className="col-md-6">
                                    <ButtonGroup>
                                        <Button style={{backgroundColor:'#65cdaa'}}>Select Shop</Button>
                                        <Dropdown >
                                            <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'white', color:'black', border:'none'}}>
                                                Heartwood Floris
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        
                                    </ButtonGroup>
                                </div>

                                <div className="col-md-6">

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="btnGroupAddon" style={{backgroundColor:'#65cdaa', color:'white'}}>Search</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder="Keywords"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                    </InputGroup>

                                </div>
                            </div>
                            

                            
                        </div>

                        <div className="col8-section2">
                            <h1>Shop Profile</h1>
                            <hr />
                            <div class="section2-form">
                                <Form>
                                    <div className="row my-4">
                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Shop&nbsp;Name:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="Heartwood Floristry & Planterium" />
                                            </Form.Group>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Address&nbsp;1:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row my-4">
                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label>Address&nbsp;2:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="" />
                                            </Form.Group>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Zip&nbsp;Code:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="number" placeholder="" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row my-4">
                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >City:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="Tahoe City" />
                                            </Form.Group>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >State:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="CA" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row my-4">
                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Country:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="United States" />
                                            </Form.Group>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Phone:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="number" placeholder="234-234-4567" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row my-4">
                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Email:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="email" placeholder="info@heartwoodflorist.com" />
                                            </Form.Group>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >URL:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="text" placeholder="www.heartswood.com" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row my-4">
                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Manager&nbsp;Email:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="email" placeholder="sahra@heartwood.com" />
                                            </Form.Group>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mx-4">
                                            <div className="label-and-field">
                                            <Form.Group controlId="formBasicPassword" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                                <Form.Label >Marketing&nbsp;Email:</Form.Label>
                                                <Form.Control style={{width:'20rem'}} type="email" placeholder="sahra@heartwood.com" />
                                            </Form.Group>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <Button  style={{backgroundColor:'#65cdaa', marginLeft:'10rem'}} type="submit">
                                        Save Settings
                                    </Button>
                                </Form>
                            </div>
                            
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default ShopConfig
