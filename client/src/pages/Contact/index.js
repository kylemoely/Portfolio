import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Contact() {
    return(
        <div className='container-fluid row mt-5 g-0 d-flex justify-content-center'>
            <div className='row col-12 col-md-8 d-flex justify-content-center'>
                <div className='col-12 col-md-7 contactinfo'>
                    <div className='email d-flex align-items-baseline'><h4>Email:</h4> <div><a href='mailto:kylemoellenkamp@gmail.com'>kylemoellenkamp@gmail.com</a></div></div>
                    <div className='phone d-flex align-items-baseline'><h4>Phone:</h4> <div>(318) 573-5576</div></div>
                    <div className='linkedin d-flex align-items-baseline'><h4>LinkedIn:</h4> <div><a href='https://www.linkedin.com/in/kyle-moellenkamp/'>linkedin.com/in/kyle-moellenkamp</a></div></div>
                    <div className='github d-flex align-items-baseline'><h4>GitHub:</h4> <div><a href='https://www.github.com/kylemoely'>github.com/kylemoely</a></div></div>
                </div>
            </div>
        </div>
    )
}