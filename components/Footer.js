import React from 'react';

function Footer(props) {
    return (
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>About</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Community</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It is best clone</p>
                <p>Referrals accepted</p>
                <p>ISAir</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Host</h5>
                <p>Is React</p>
                <p>Presents</p>
                <p>Zero to Full Stack</p>
                <p>3 Years Experience</p>
                <p>Join Now</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Support</h5>
                <p>Help Center</p>
                <p>Trust and Safety</p>
                <p>Say Hi Youtube</p>
                <p>Easter Eggs</p>
                <p>For the win</p>
            </div>
        </div>
    );
}

export default Footer;