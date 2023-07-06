import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='header-content row container-fullwidth d-flex justify-content-around pt-5 pb-1'>
                <div className='nameRow row d-flex justify-content-around'>
                    <div className='name col-12 col-md-3'>Kyle Moellenkamp</div>
                    <div className='col-12 col-md-3'></div>
                </div>
                <div className='container-fluid row d-flex justify-content-around '>
                    <div className='subtitle col-12 col-sm-3'>Software Developer</div>
                    
                    <div className='links d-flex col-12 col-sm-3 justify-content-between align-items-end'>
                        <Link className='butn Home' to='/'>Home</Link>
                        <Link className='butn Resume' to='/resume'>Resume</Link>
                        <Link className='butn Projects' to='/projects'>Projects</Link>
                        <Link className='butn Contact' to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}