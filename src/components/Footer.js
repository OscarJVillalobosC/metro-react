import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About Metro</Link></li>
                            <li><Link to='/rail'>Rail Routes</Link></li>
                            <li><Link to='/contactus'>Bus Routes</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/metroforward/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/MetroForward"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/wmata"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/user/MetroForward/videos"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12026377000"><i className="fa fa-phone" /> 1202-637-7000</a><br />
                        <a role="button" className="btn btn-link" href="mailto: smartrip@wmata.com"><i className="fa fa-envelope-o" />  smartrip@wmata.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;