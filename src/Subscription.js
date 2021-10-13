import React from 'react';
import "./Subscription.css";
import { BsPersonPlus } from 'react-icons/bs';

const Subscription = () => {
    return (
        <div className="subscription-container">
           <div className="row">
           <div className="col-md-2">
                 <nav className="w3-sidebar w3-bar-block w3-black w3-collapse w3-top" style={{width:'250px'}} id="mySidebar">
                            <div class="w3-container w3-display-container w3-padding-16">
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <BsPersonPlus size={25} />
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <h4>Sahra Otero</h4>
                                        <p>sahra@wandasium.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-padding-64 w3-medium " style={{ fontWeight:'bold'}}>

                                    <a href="/" className="w3-bar-item w3-button">Home</a>
                                    <a href="/" className="w3-bar-item w3-button">Estimates</a>
                                    <a href="/" className="w3-bar-item w3-button">Subscriptions</a>
                                    <a href="/" className="w3-bar-item w3-button">Invoices</a>
                                    <a href="/" className="w3-bar-item w3-button">Payments Mode</a>
                                    <a href="/" className="w3-bar-item w3-button">Statements</a>
                                    <a href="/" className="w3-bar-item w3-button">Logout</a>
                                    
                            </div>

                        </nav>
                    </div>

                <div className="col-md-10">
                    <div className="heading">
                        Hello Sahra Otero!
                    </div>
                    <div className="credits sections">
                        <div className="jumb-section1">
                            <small>Outstanding Invoices</small>
                            <h2 className="text-danger">$0.00</h2>
                        </div>
                        <div className="jumb-section2">
                            <small>Available Credits</small>
                            <h2 className="text-success">$0.00</h2>
                        </div>
                    </div>
                    <div className="last-payment-made">
                        <h5>Last Payment Made</h5>
                        <div className=" sections">
                            <div className="jumb-section1">
                                <h3>$99.99</h3>
                                <smaill>Paid for <a href="/">INV-011228</a></smaill>
                            </div>
                            <div className="jumb-section2">
                                <small>Paid On</small>
                                <p>September 27, 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-details">
                        <div className="header">
                            <h5>My Details</h5>
                            <small><a href="/">View More</a></small>
                        </div>

                        <div className="header-sections">
                            <h3>Wanda's Floral & Gifts</h3>
                            <p><strong>Sahra Otera</strong></p>
                            <div className="card-detailss">
                                <small>Card Details</small>
                                <div className="cd1">
                                    <p>**** **** **** 3889</p>
                                    <p>9/2022</p>
                                </div>

                                <div className="cd2">
                                    <p>**** **** **** 9890</p>
                                    <p>9/2021</p>
                                </div>
                                
                            </div>
                          </div>  

                    </div>
                </div>
           </div>
        </div>
    )
}

export default Subscription
