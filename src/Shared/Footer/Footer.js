import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
            <div className='footer-container'>
                <p className='footer-content text-center m-0 py-2'> &#169;<small>{year} by <strong>BS STROE</strong> All Rights Reserved.</small></p>
            </div>
    );
};

export default Footer;