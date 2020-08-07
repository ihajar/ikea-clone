import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Fouter() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__info">
                    <h3>Join IKEA Family</h3>
                    <p>
                        Bring your ideas to life 
                        with special discounts, inspiration, 
                        and lots of good things in store. 
                        It's all free. <a>See more.</a>
                    </p>
                    <Link to="/login" className="footer__infoLink">
                        <p className="footer__infoLink">Join or log in</p>
                    </Link>
                </div>
                <div className="footer__infoList">
                    <ul>
                        <li className="footer__infoLi">
                            <h5 className="footer__infoListTitle">Customer service</h5>
                            <div className="footer__infoLinks">
                                <a>Customer service</a>
                                <a>My orders</a>
                                <a>Returns &amp; claims</a>
                                <a>Delivery</a>
                                <a>Stock information</a>
                                <a>Services</a>
                                <a>Recalls</a>
                                <a>Personal advice</a>
                            </div>
                        </li>
                        <li className="footer__infoLi">
                            <h5>About IKEA</h5>
                            <div className="footer__infoLinks">
                                <a>IKEA concept</a>
                                <a>This is IKEA</a>
                                <a>Sustainability</a>
                                <a>Ideas</a>
                                <a>Catalogue &amp; brochures</a>
                                <a>Campaigns</a>
                                <a>Working at IKEA</a>
                                <a>Press</a>
                                <a>IKEA news</a>
                            </div>
                        </li>
                        <li className="footer__infoLi">
                            <h5>Shopping at IKEA</h5>
                            <div className="footer__infoLinks">
                                <a>Opening hours</a>
                                <a>All stores</a>
                                <a>Offers</a>
                                <a>Restaurant</a>
                                <a>Swedish Food Market</a>
                                <a>IKEA App</a>
                                <a>Gift card</a>
                            </div>
                        </li>
                        <li className="footer__infoLi">
                            <h5>IKEA Family &amp; Business</h5>
                            <div className="footer__infoLinks">
                                <a>Log in</a>
                                <a>Sign up</a>
                                <a>About IKEA Family</a>
                                <a>Benefits</a>
                                <a>Events</a>
                                <a>IKEA for Business</a>
                            </div>
                        </li>
                    </ul>
                </div>
               
            </div>
            <div className="footer__social">
                <div className="footer__links">
                    <div className="footer__socialIcons">
                        <FacebookIcon className="footer__icon"/>
                    </div>

                    <div className="footer__socialIcons">
                        <InstagramIcon className="footer__icon"/>
                    </div>

                    <div className="footer__socialIcons">
                        <PinterestIcon className="footer__icon"/>
                    </div>
                   
                    <div className="footer__socialIcons">
                        <YouTubeIcon className="footer__icon"/>
                    </div>
                </div>

                <div className="footer__buttons">
                    <button>
                        <LanguageIcon className="button__icon"/>
                        <p className="button__name"> Change country</p>
                    </button>
                    <button>
                    <p className="button__name"> English</p>
                        <KeyboardArrowDownIcon className="button__icon" />
                    </button>
                </div>
                

            </div>
            <hr className="footer__line"/>
            <div className="footer__bottom">
                <p>&copy; Inter IKEA Systems B.V. 1999-2020</p>
                <div className="footer__bottomTags">
                    <a>Privacy policy</a>
                    <a>Cookie policy</a>
                    <a>Cookie settings</a>
                    <a>Terms and conditions</a>
                    <a>User terms and conditions </a>
                    <a>Responsible Disclosure Program</a>
                </div>
            </div>
        </div>
    )
}

export default Fouter;
