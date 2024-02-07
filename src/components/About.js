import { React } from 'react';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function About(props) {
    return (
        <div className='row align-items-start'>
            <div className='sidebar_about col' >
                        <div className='sidebar-info-box'>
                            <br></br>
                            <div className='thumbnail-box'>
                                <a href='/'>
                                    <img className='thumbnail' src={ProfilePhoto} />
                                </a>
                            </div>
                            <div className='dev-intro-box'>
                                <h5>
                                    MATTHEW BURTONSHAW
                                </h5>
                                <a href='/about'>
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
            <div className='col'>
                <nav className='nav'>
                    <a href='/'>
                        Back
                    </a>
                </nav>
                
                    <article className='portfolio-about text-center'>
                        <div id='about_container' className='inner-wrapper flex-row-wrap'>
                        <div className='row align-items-start about_width'>
                            <div className='about-intro-box box col m-auto py-5 w-75'>
                                <h1>
                                    Matthew Burtonshaw
                                </h1>
                                <p>
                                    Full Stack Javascript Developer
                                </p>
                                <div className='about-bio'>
                                    <p>
                                        I'm a web developer who has been teaching myself through an online curriculum. I've recently received the Full Stack JavaScript Tech Degree from TeamTreehouse which allowed me to learn and utilize JavaScript, JQuery, Express, SQL, React, and more. Through these classes I have been able to practice these skills to build a variety of applications. Going forward, I'd like to find work that has me building new and fulfilling projects.
                                    </p>
                                    <p>
                                        Previously, I worked for Case Western Reserve University Farm; a research farm where I oversaw the production of organic fruits, vegetables, and mushrooms. I also took part in team planning, led guided tours, and taught seminars in mushroom production. But after years of this type of work, I found my interests had shifted elsewhere.
                                    </p>
                                    <p>
                                        Since focusing on web development, I've also had the opportunity to develop the website of a local cocktail bar, which taught me about real-world application of the skills I'd been learning. I got to work with a business owner as well as a designer; this was a real growing experience and challenged me to learn things well beyond the scope of my current knowledge. I would like to find more meaningful experiences such as that going forward.
                                    </p>
                                </div>
                                <div className='py-1'>
                                    <button className='btn-link-4'><a href=''>Resume</a></button>
                                    <button className='btn-link-4'><a href=''>LinkedIn</a></button>
                                    <button className='btn-link-4'><a href=''>Certification</a></button>
                                    <button className='btn-link-4'><a href=''>Github</a></button>
                                </div>
                            </div>
                            <div className='skills-contact-box col w-25 m-auto'>
                                <h6 className='indent listed'>
                                    Skills
                                </h6>
                                <p className='listed'>
                                    HTML
                                </p>
                                <p className='listed'>
                                    CSS
                                </p>
                                <p className='listed'>
                                    Bootstrap
                                </p>
                                <p className='listed'>
                                    Javascript
                                </p>
                                <p className='listed'>
                                    JQuery
                                </p>
                                <p className='listed'>
                                    Node.js
                                </p>
                                <p className='listed'>
                                    Fetch and Public APIs
                                </p>
                                <p className='listed'>
                                    JSON
                                </p>
                                <p className='listed'>
                                    Express
                                </p>
                                <p className='listed'>
                                    Pug
                                </p>
                                <p className='listed'>
                                    React
                                </p>
                                <p className='listed'>
                                    React-Router
                                </p>
                                <p className='listed'>
                                    SQL
                                </p>
                                <h6 className='indent'>
                                    Contact Info
                                </h6>
                                <p >
                                    440-749-2093
                                </p>
                                <p >
                                    MBurtonshaw@gmail.com
                                </p>
                            </div>
                            
                        </div>
                        </div>
                    </article>
                
                <nav className='nav'>
                    <a href='/'>
                        Back
                    </a>
                </nav>
            </div>
        </div>
    );
}