import React from 'react';
import banner from '../resources/banner.png';

function Header() {
    return (
        <div className="header">
            <div className="banner">
                <img src={banner} style={{ height: 64 }} />
            </div>
        </div>
    );
}

export default Header;
