import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Header() {
    return (
        <header>
            <div className='header-content d-flex justify-content-around pt-5 pb-1'>
                <div className='nameInfo'>
                    <div>Kyle Moellenkamp</div>
                    <div className='subtitle'>Junior Software Developer</div>
                </div>
                <navbar className='d-flex justify-content-between align-items-end'>
                    <div className='butn Home'>Home</div>
                    <div className='butn Resume'>Resume</div>
                    <div className='butn Projects'>Projects</div>
                    <div className='butn Contact'>Contact</div>
                </navbar>
            </div>
        </header>
    )
}