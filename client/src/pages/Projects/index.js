import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import sqlproj from './sql.PNG';
import blog from './blog.PNG';
import steam from './steam.JPG';
import marvel from './marvel.png';

export default function Projects() {
    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <div className='row d-flex justify-content-center'>
                <div className='row col-12 col-lg-10 d-flex justify-content-around'>
                    <div className='project projectOne row g-0 col-12 col-md-5'>
                        <img src={steam}/>
                        <div className='overlayOne overlay'>
                            <div className='title'>Steam Game Review</div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='descrip align-self-center text-justify'>This site, made with a group of four developers, allows users to create an account, rate and write reviews for their favorite video games on Steam, and view other users' reviews as well. I contributed to this project by developing the database models as well as the API routes. Explore the full repo and try it out yourself <a href='https://github.com/kylemoely/Steam-Game-Review'>here</a>.</div>
                            </div>
                        </div>
                    </div>
                    <div className='project projectTwo row g-0 col-12 col-md-5'>
                        <img src={blog}/>
                        <div className='overlay overlayTwo'>
                            <div className='title'>Tech Blog</div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='descrip align-self-center text-justify'>An independently made full-stack web app, this blog page features user accounts, a dashboard for the logged in user, the ability to create blog posts and blog post comments, as well as the option to edit and remove those comments and posts. Data is stored in a SQL database with models for users, posts, and comments. Explore the full repo and try it out yourself <a href='https://github.com/kylemoely/Tech-Blog'>here</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row col-12 col-lg-10 d-flex justify-content-around'>
                    <div className='project projectThree row g-0 col-12 col-md-5'>
                        <img src={sqlproj} id='sqlpic'/>
                        <div className='overlay overlayThree'>
                            <div className='title'>SQL Employee Database</div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='descrip align-self-center text-justify'>This project features a sample employee database written using SQL that holds basic information such as name, salary, role, and manager info. The project also comes with a database manager that runs in the terminal using Node.js. This program is capable of performing several database queries, allowing the user to create, read, update, or delete data entries. Explore the full repo and try it out yourself <a href='https://github.com/kylemoely/Employee-Database'>here</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project projectFour row g-0 col-12 col-md-5'>
                        <img src={marvel}/>
                        <div className='overlayFour overlay'>
                            <div className='title'>Marvel Character API</div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='descrip align-self-center text-justify'>Here is a simple frontend web app made with a group of developers. It features a search bar that allows the user to look up any Marvel comic book character. The site uses a third party API to fetch data about the character including comic book stats and recent comic books in which the character appears. Explore the full repo and try it out yourself <a href='https://github.com/will-rd/Project1-Webpage'>here</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}