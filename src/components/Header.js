import React from 'react'
import logo from './media/Logo_Triforce.png';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='triforce-logo' className='header-logo'/>
            <div className='headerFont'>
                <div>
                    Zelda
                </div>
                <div>
                    Wiki
                </div>
                <div>
                    Portal
                </div>
            </div>
        </div>
    )
}

export default Header