import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import pdf from '../../components/resume.pdf'
import pdfpic from '../../components/resumepic.jpg'

export default function Resume() {
    return(
        <div className='containers container mt-5 d-flex justify-content-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-8 resumeblock'>
                    <img src={pdfpic} className='img-fluid' alt='My resume should be showing. Download a PDF below.'/>
                </div>
                <a href={pdf} download='Kyle_Moellenkamp-Resume'>
                    Download PDF
                </a>
            </div>
        </div>
    )
}