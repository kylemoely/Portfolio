import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Header() {
    return (
        <header>
            <div className='header-content row container-fullwidth d-flex justify-content-around pt-5 pb-1'>
                <div className='nameRow row d-flex justify-content-around'>
                    <div className='name col-12 col-md-3'>Kyle Moellenkamp</div>
                    <div className='col-12 col-md-3'></div>
                </div>
                <div className='container-fluid row d-flex justify-content-around '>
                    <div className='subtitle col-12 col-sm-3'>Junior Software Developer</div>
                    
                    <navbar className='d-flex col-12 col-sm-3 justify-content-between align-items-end'>
                        <div className='butn Home'>Home</div>
                        <div className='butn Resume'>Resume</div>
                        <div className='butn Projects'>Projects</div>
                        <div className='butn Contact'>Contact</div>
                    </navbar>
                </div>
            </div>
        </header>
    )
}