import React, {useState} from 'react'
import "./CustomerList.css";
import {FaShareSquare} from 'react-icons/fa';
import { Button, Tab, Tabs } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import { BsJustify,BsFillTabletLandscapeFill } from "react-icons/bs";
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
// import Breadcrumb from 'react-bootstrap/Breadcrumb'

const CustomerList = () => {
    const [key, setKey] = useState('home');
    let active = 2;
    let items = [];

    for (let number = 1; number <= 10; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }

    return (
        <div className="customerList-container">
            <div className="jumbotron section-1">
                <Button className="mx-2" variant="info">Recent Orders</Button>

                <div className="multiple-dropdowns">
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'white', color:'black'}}>
                            Heartwood Floristr
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'white', color:'black'}}>
                            Calender
                        </Dropdown.Toggle>

                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'white', color:'black'}}>
                            Advanced View
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
            </div>
            <div className="option-counts">
                <Option heading="Pending Deliveries" count="0" />
                <Option heading="Pending Confirmations" count="0" />
                <Option heading="Unread Msgs" count="0" />
                <Option heading="Wait Queue" count="0" />
                <Option heading="Non Deliveries" count="0" />
                <Option heading="Pending Pickup" count="0" />
            </div>

            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" >
                <Tab eventKey="PD" title="Pending Deliveries">
                    <h2>This is Pending Deliveries</h2>
                </Tab>
                <Tab eventKey="messages" title="Messages">
                    <h2>This is Messages</h2>
                </Tab>

                <Tab eventKey="customers" title="Customers">
                    <div className="subsection">
                        <ButtonGroup className="mr-2" aria-label="First group">
                            <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>New Customer</Button>
                            <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>Merge Customer</Button> 
                            <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>Email Invoices</Button> 
                            <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>Print Invoices</Button>
                            <Button className="mx-2" style={{ backgroundColor:'#65cdaa', color:'white'}}>Generate Statements</Button>
                        </ButtonGroup>


                        <div className="btn-with-text">
                            <small>Show only accounts with balance</small>
                            <div className="toggle-switch mx-4"> 
                                <input type="checkbox" className="checkbox" />
                                <label className="label" htmlFor="Balance">
                                    <span className="inner" />
                                    <small><span className="switch" /></small>
                                </label>
                            </div>
                        </div>
                        
                    </div>
                    

                    <div className="mx-4 mt-4">
                        <Pagination size="sm">
                            <Pagination.First />
                            <Pagination.Prev />
                                {items}
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Action</th>
                                    <th>Customer Id</th>
                                    <th>Customer Name</th>
                                    <th>Company Name</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>City State Zip</th>
                                    <th>Account Balance</th>
                                    <th>Store Credit </th>
                                    <th>0-30</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                        <BsJustify />
                                        <BsFillTabletLandscapeFill />
                                    </td>
                                    <td><small>334224</small></td>
                                    <td><small>Lorem Ipsum</small></td>
                                    <td><small></small></td>
                                    <td><small>123-345-4565</small></td>
                                    <td><small>P.O.Box 1210</small></td>
                                    <td><small>Calfornia</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                        <BsJustify />
                                        <BsFillTabletLandscapeFill />
                                    </td>
                                    <td><small>334224</small></td>
                                    <td><small>Lorem Ipsum</small></td>
                                    <td><small></small></td>
                                    <td><small>123-345-4565</small></td>
                                    <td><small>P.O.Box 1210</small></td>
                                    <td><small>Calfornia</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                        <BsJustify />
                                        <BsFillTabletLandscapeFill />
                                    </td>
                                    <td><small>334224</small></td>
                                    <td><small>Lorem Ipsum</small></td>
                                    <td><small></small></td>
                                    <td><small>123-345-4565</small></td>
                                    <td><small>P.O.Box 1210</small></td>
                                    <td><small>Calfornia</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                        <BsJustify />
                                        <BsFillTabletLandscapeFill />
                                    </td>
                                    <td><small>334224</small></td>
                                    <td><small>Lorem Ipsum</small></td>
                                    <td><small></small></td>
                                    <td><small>123-345-4565</small></td>
                                    <td><small>P.O.Box 1210</small></td>
                                    <td><small>Calfornia</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                    <td><small>$0.00</small></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    

                    
                </Tab>

                <Tab eventKey="CR" title="CC Review">
                    <h2>This is CC Review</h2>
                </Tab>
                <Tab eventKey="PR" title="Payments Review">
                    <h2>This is Payments Review</h2>
                </Tab>
                <Tab eventKey="DR" title="Designer Review">
                    <h2>This is Designer Review</h2>
                </Tab>
            </Tabs>
        </div>
    )
}

export default CustomerList;

const Option = ({heading, count}) => {
    return (
        <div className="option">
            <div className="icon"><FaShareSquare /></div>
            <div className="info">
                <small>{heading}</small>
                <h1><strong>{count}</strong></h1>
            </div>
        </div>
    )
}


