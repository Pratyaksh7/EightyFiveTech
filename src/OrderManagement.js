import React from 'react';
import "./OrderManagement.css";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { BsJustify} from "react-icons/bs";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { FaCalendarAlt } from 'react-icons/fa';


const OrderManagement = () => {
    return (
        <div className="order-container">
            <div className="order-section1">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>Recurring Orders</Button>
                    <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>Auto Cancel Criteria</Button> 
                </ButtonGroup>

                <div className="text-with-dropdown container">
                    <small>Select Shop</small>
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'white', color:'black'}}>
                            Heartwood Floristr & Planterium
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="order-section2">
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ backgroundColor:'#65cdaa', color:'white'}}>
                            <th>Action</th>
                            <th>Recurring Id</th>
                            <th>Customer Name</th>
                            <th>Recipient Name</th>
                            <th>MOP</th>
                            <th>Total</th>
                            <th>Frequency</th>
                            <th>Next Delivery Date</th>
                            <th>Recurring End Date </th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <BsJustify />
                            </td>
                            <td><small>1541</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>INVOICE</small></td>
                            <td><small>$64.35</small></td>
                            <td><small>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'transparent', color:'black'}}>
                                    &nbsp;&nbsp;Yearly&nbsp;&nbsp; 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                </small></td>

                            <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder="02/22/2022"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>

                                <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder=""
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>
                            
                            <td><small><input type="checkbox" /></small></td>
                        </tr>

                        <tr>
                            
                            <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <BsJustify />
                            </td>
                            <td><small>1541</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>INVOICE</small></td>
                            <td><small>$64.35</small></td>
                            <td><small>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'transparent', color:'black'}}>
                                    &nbsp;&nbsp;Yearly&nbsp;&nbsp; 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                </small></td>

                            <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder="02/22/2022"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>

                                <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder=""
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>
                            
                            <td><small><input type="checkbox" /></small></td>
                        </tr>

                        <tr>
                            
                            <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <BsJustify />
                            </td>
                            <td><small>1541</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>INVOICE</small></td>
                            <td><small>$64.35</small></td>
                            <td><small>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'transparent', color:'black'}}>
                                    &nbsp;&nbsp;Yearly&nbsp;&nbsp; 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                </small></td>

                            <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder="02/22/2022"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>

                                <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder=""
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>
                            
                            <td><small><input type="checkbox" /></small></td>
                        </tr>

                        <tr>
                            
                            <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <BsJustify />
                            </td>
                            <td><small>1541</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>INVOICE</small></td>
                            <td><small>$64.35</small></td>
                            <td><small>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'transparent', color:'black'}}>
                                    &nbsp;&nbsp;Yearly&nbsp;&nbsp; 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                </small></td>

                            <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder="02/22/2022"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>

                                <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder=""
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>
                            
                            <td><small><input type="checkbox" /></small></td>
                        </tr>

                        <tr>
                            
                            <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <BsJustify />
                            </td>
                            <td><small>1541</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>Lorem Ipsum</small></td>
                            <td><small>INVOICE</small></td>
                            <td><small>$64.35</small></td>
                            <td><small>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'transparent', color:'black'}}>
                                    &nbsp;&nbsp;Yearly&nbsp;&nbsp; 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                </small></td>

                            <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder="02/22/2022"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>

                                <td><small>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon"><FaCalendarAlt /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <FormControl
                                            type="text"
                                            placeholder=""
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </small></td>
                            
                            <td><small><input type="checkbox" /></small></td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default OrderManagement
