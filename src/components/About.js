import { React } from 'react';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function About() {

    let skill_array = ['Java', 'HTML', 'CSS', 'JavaScript', 'Spring Boot', 'Vue.js', 'React.js', 'JDBC', 'Table Design', 'SQL', 'PostgreSQL', 'E/R Diagrams', 'Agile', 'Unit Testing (JUnit)', 'Integration Testing', 'Git', 'IntelliJ', 'Bootstrap', 'Node.js', 'Express.js'];

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
                            Full Stack Developer
                        </p>
                        <h5 className='pt-3 my-2'>Skills: </h5>
                        <span>
                            {
                                skill_array.map(
                                    (skill) => {
                                       
                                            return (skill + ', ')
                                        

                                    }
                                )
                            }
                        </span>
                        <div className='about-bio w-75 m-auto px-1'>
                            <p>
                                Hi! I'm Matt Burtonshaw, a former horticulturist transitioning into the world of Full Stack Java development through Tech Elevator. With a background rooted in research farming, my journey has always been fueled by a passion for strategy and design, as well as digging into learning what makes things work. Now, in the realm of programming, I find the perfect fusion of these interests.
                                <br></br>
                                <br></br>
                                Crafting intuitive user interfaces and strategically unravelling complex problems deeply resonate with me. I'm eager to leverage my strategic insights and collaborative spirit to contribute meaningfully to a team, where I can fuse my expertise in horticulture with my burgeoning skills in software development to create impactful applications.
                                <br></br>
                                <br></br>
                            </p>

                        </div>
                        <div className='py-4'>
                            <button className='btn-link-5'><a href='http://twopinesdevelopment.com/Resume.pdf'>Resume</a></button>
                            <button className='btn-link-5'><a href='https://www.linkedin.com/in/matthew-burtonshaw/'>LinkedIn</a></button>
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
                        Full Stack Developer
                    </p>
                    <div className='about-bio'>
                        <p>
                            Hi! I'm Matt Burtonshaw, a former horticulturist transitioning into the world of Full Stack Java development through Tech Elevator. With a background rooted in research farming, my journey has always been fueled by a passion for strategy and design, as well as digging into learning what makes things work. Now, in the realm of programming, I find the perfect fusion of these interests.
                            <br></br>
                            <br></br>
                            Crafting intuitive user interfaces and strategically unravelling complex problems deeply resonate with me. I'm eager to leverage my strategic insights and collaborative spirit to contribute meaningfully to a team, where I can fuse my expertise in horticulture with my burgeoning skills in software development to create impactful applications.
                            <br></br>
                            <br></br>
                        </p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='py-1'>
                        <button className='btn-link-4'><a href='http://twopinesdevelopment.com/Resume.pdf'>Resume</a></button>
                        <button className='btn-link-4'><a href='https://www.linkedin.com/in/matthew-burtonshaw/'>LinkedIn</a></button>
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
                    <h6 className='indent my-4 pt-4'>
                        Skills
                    </h6>
                    {
                        skill_array.map((skill, i) => {
                            return (<p key={i} className='listed'>{skill}</p>);
                        })
                    }
                    <h6 className='indent my-3 pt-4'>
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
                            <div>
                                <div className='w-75 mx-auto'>
                                    {filler_1()}
                                </div>
                              
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