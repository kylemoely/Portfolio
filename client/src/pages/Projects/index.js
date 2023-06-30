import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import sqlproj from './sql.PNG';
import blog from './blog.PNG';

export default function Projects() {
    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <div className='row d-flex justify-content-center'>
                <div className='row col-12 col-lg-10 d-flex justify-content-around'>
                    <div className='project projectOne row g-0 col-12 col-md-5'>
                        <img src={sqlproj}/>
                        <div className='overlayOne d-flex flex-column overlay'>
                            <div className='title'>SQL Employee Database</div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='descrip align-self-center text-center'>This project features a sample employee database written using SQL that holds basic information such as name, salary, role, and manager info. The project also comes with a database manager that runs in the terminal using Node.js. This program is capable of performing several database queries, allowing the user to create, read, update, or delete data entries. Explore the full repo and try it out yourself <a href='https://github.com/kylemoely/Employee-Database'>here</a>.</div>
                            </div>
                        </div>
                    </div>
                    <div className='project projectTwo row g-0 col-12 col-md-5'>
                        <img src={blog}/>
                        <div className='overlay overlayTwo'>
                            
                        </div>
                    </div>
                </div>
                <div className='row col-10 d-flex justify-content-around'>
                    <div className='project projectThree col-12 col-md-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='project projectFour col-12 col-md-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div className='row col-10 d-flex justify-content-around'>
                    <div className='project projectFive col-12 col-md-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='project projectSix col-12 col-md-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
    )
}