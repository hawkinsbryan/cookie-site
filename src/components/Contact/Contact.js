import React, { Component } from "react";
import './Contact.scss';

export default class Contact extends Component {


    render() {
        return (
            <div className="contact-page">
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <h2>Stacy's Cookies</h2>
                    <h3>Phone: 682-225-9685</h3>
                    <h3>Email: info@stacyscookies.com</h3>
                    <h3>Hours of Operation:
                        Monday- Friday (CST): 9:00 am - 3:00 pm
            </h3>
                </div>
            </div>
        );
    }
}