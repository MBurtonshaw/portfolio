import { React } from 'react';

export default function Header(props) {
    return(
        <div className='wrapper'>
            <nav className='nav'>
                <a href='/'>
                    Back
                </a>
            </nav>
            <article className='portfolio-about'>
                <div  id='about_container' className='inner-wrapper flex-row-wrap two-col'>
                    <div className='about-intro-box box'>
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
                    </div>
                    <div className='skills-contact-box box'>
                        <h6 className='indent'>
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
                    <div>
                        <a className="btn-link-3" target="_blank" href="http://twopinesdevelopment.com/Tech_Resume.pdf">
                            Resume
                        </a>
                    </div>
                    <div>
                        <a className="btn-link-3" target="_blank" href="https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx">
                            Certification
                        </a>
                    </div>
                    <div>
                        <a className="btn-link-3" target="_blank" href="https://www.linkedin.com/in/matthew-burtonshaw-9495b1191/">
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a className="btn-link-3" target="_blank" href="https://github.com/MBurtonshaw?tab=repositories">
                            GitHub
                        </a>
                    </div>
                </div>
            </article>
            <nav className='nav'>
                <a href='/'>
                    Back
                </a>
            </nav>
        </div>
    );
}