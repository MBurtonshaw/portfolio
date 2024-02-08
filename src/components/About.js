import { React } from 'react';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function About() {

    let skill_array = ['HTML', 'CSS', 'Javascript', 'JQuery', 'Node.js', 'JSON', 'Express', 'Pug', 'Bootstrap', 'React', 'SQL'];

    function filler_1() {
        if (window.innerWidth < 768) {
            return (
                <div>
                    <nav className='nav'>
                        <a href='/'>
                            Back
                        </a>
                    </nav>
                    <div className='about-intro-box'>

                        <h1 className='pt-4'>
                            Matthew Burtonshaw
                        </h1>
                        <p>
                            Full Stack Javascript Developer
                        </p>
                        <h5 className='pt-3'>Skills: </h5>
                        <span>
                            {
                                skill_array.map(
                                    (skill) => {
                                        if (skill !== 'SQL') {
                                            return (skill + ', ')
                                        } else {
                                            return (skill)
                                        }

                                    }
                                )
                            }
                        </span>
                        <div className='about-bio w-75 m-auto px-1'>
                            <p>
                                I'm a self taught web developer, which began when I received the Full Stack JavaScript Tech Degree from TeamTreehouse (teamtreehouse.com). This curriculum allowed me to learn and utilize JavaScript, JQuery, Express, SQL, React, and more. Through these classes I have been able to practice these skills to build a variety of applications. Going forward, I'd like to find work building meaningful and fulfilling projects.
                                <br></br>
                                <br></br>
                                In my previous job, I worked for Case Western Reserve University on a research farm, where I took part in team planning, led guided tours, managed growing areas and taught classes related to Horticulture. But after years of this type of work, I found my interests had shifted elsewhere.
                                <br></br>
                                <br></br>
                                Since focusing on web development, I've also had the opportunity to build the website for a local cocktail bar, which taught me about real-world application of the skills I'd been learning. Since then, I've been working on personal websites in order to continue to practice new techniques and build my portfolio. Going forward, I would like to find meaningful work that will help me to grow as a programmer.
                            </p>

                        </div>
                        <div className='py-4'>
                            <button className='btn-link-5'><a href='http://twopinesdevelopment.com/Tech_Resume.pdf'>Resume</a></button>
                            <button className='btn-link-5'><a href='https://www.linkedin.com/in/matthew-burtonshaw-9495b1191/'>LinkedIn</a></button>
                            <button className='btn-link-5'><a href='https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'>Certification</a></button>
                            <button className='btn-link-5'><a href='https://github.com/MBurtonshaw'>Github</a></button>
                        </div>
                    </div>
                    <nav className='nav'>
                        <a href='/'>
                            Back
                        </a>
                    </nav>
                </div>
            );
        } else {
            return (
                <div className='about-intro-box box col m-auto py-5 w-75 fly_up'>
                    <h1>
                        Matthew Burtonshaw
                    </h1>
                    <p>
                        Full Stack Javascript Developer
                    </p>
                    <div className='about-bio'>
                        <p>
                            I'm a self taught web developer, which began when I received the Full Stack JavaScript Tech Degree from TeamTreehouse (teamtreehouse.com). This curriculum allowed me to learn and utilize JavaScript, JQuery, Express, SQL, React, and more. Through these classes I have been able to practice these skills to build a variety of applications. Going forward, I'd like to find work building meaningful and fulfilling projects.
                            <br></br>
                            <br></br>
                            In my previous job, I worked for Case Western Reserve University on a research farm, where I took part in team planning, led guided tours, managed growing areas and taught classes related to Horticulture. But after years of this type of work, I found my interests had shifted elsewhere.
                            <br></br>
                            <br></br>
                            Since focusing on web development, I've also had the opportunity to build the website for a local cocktail bar, which taught me about real-world application of the skills I'd been learning. Since then, I've been working on personal websites in order to continue to practice new techniques and build my portfolio. Going forward, I would like to find meaningful work that will help me to grow as a programmer.
                        </p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='py-1'>
                        <button className='btn-link-4'><a href='http://twopinesdevelopment.com/Tech_Resume.pdf'>Resume</a></button>
                        <button className='btn-link-4'><a href='https://www.linkedin.com/in/matthew-burtonshaw-9495b1191/'>LinkedIn</a></button>
                        <button className='btn-link-4'><a href='https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'>Certification</a></button>
                        <button className='btn-link-4'><a href='https://github.com/MBurtonshaw'>Github</a></button>
                    </div>
                </div>
            );
        }
    }

    function filler_2() {

        if (window.innerWidth < 768) {
            return (
                ''
            );
        } else {
            return (
                <div className='skills-contact-box col w-25 m-auto fly_down'>
                    <h6 className='indent listed'>
                        Skills
                    </h6>
                    {
                        skill_array.map((skill, i) => {
                            return (<p key={i} className='listed'>{skill}</p>);
                        })
                    }
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
            );
        }
    }


    if (window.innerWidth < 1400) {
        if (window.innerWidth < 768) {
            return (
                <div>
                    <article className='portfolio-about text-center'>
                        <div id='' className='inner-wrapper flex-row-wrap'>
                            <div className=''>
                                {filler_1()}
                                {filler_2()}
                            </div>
                        </div>
                    </article>
                </div>
            );
        } else {
            return (
                <div>
                    <article className='portfolio-about text-center'>
                        <div id='about_container' className='inner-wrapper flex-row-wrap'>
                            <div className='row align-items-start about_width'>
                                {filler_1()}
                                {filler_2()}
                            </div>
                        </div>
                    </article>
                </div>
            );
        }
    } else {
        return (
            <div className='row align-items-start'>
                <div className='sidebar_about col' >
                    <div className='sidebar-info-box'>
                        <br></br>
                        <div className='thumbnail-box'>
                            <a href='/'>
                                <img className='thumbnail slow_fade' src={ProfilePhoto} />
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
                                {filler_1()}
                                {filler_2()}

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
}