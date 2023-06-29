import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Projects() {
    return (
        <div className='containers container mt-5 d-flex justify-content-center'>
            <div className='row d-flex justify-content-center'>
                <embed type='pdf' src='.resume.pdf'></embed>
            </div>
        </div>
    )
}