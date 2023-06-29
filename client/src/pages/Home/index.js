import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Home() {
    return (
        <div className='container home-body mt-5'>
            <div className='row d-flex'>
                <div className='home-img col-12 col-md-3'>
                    <img src='https://media.licdn.com/dms/image/C4E03AQHhGriLlKddYQ/profile-displayphoto-shrink_800_800/0/1586915141194?e=1693440000&v=beta&t=Ob0_cHfNe87LU1d53Y2rLCBFRRV1y5fhM3LUH5YKgIA'
                        className='img-fluid pic'
                        alt='Kyle' />
                </div>
                <div className='row col-12 col-md-6 offset-md-1'>
                    <div className='aboutMe home-sections mb-4'>
                        <div className='title'>
                            About Me
                        </div>
                        <p>As a recent graduate from the full-stack coding boot camp at Georgia Tech, I have developed many software applications using JavaScript to write code for both the front end and back end. Check out the Resume tab to see my work and education, and visit the Projects page to see what I am capable of. <br></br></p>
                    </div>
                    <div className='skills home-sections d-flex flex-column align-items-center'>
                        <div className='title align-self-start'>
                            Proficient Skills
                        </div>
                        <div className=''>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' 
                            className='jspic logo'
                            alt='JavaScript' />
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'
                            className = 'nodepic logo'
                            alt='Node.js' />
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                            className = 'reactpic logo'
                            alt='React.js' />
                            <img src='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'
                            className = 'SQLpic logo'
                            alt='SQL' />
                            <img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
                            className='expresspic logo'
                            alt='Express.js' />
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'
                            className='mongopic logo'
                            alt='MongoDB' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}