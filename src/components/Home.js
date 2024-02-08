import { React, useState, useEffect } from 'react';
import data from '../portfolio/data.json';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function Home() {

    /*                          ASYNC FUNCTIONS                             */

    let [projects, setProjects] = useState();

    async function getProjects() {
        let info = data.data.projects;
        setProjects(info);
    }

    useEffect(() => { getProjects() }, [setProjects]);

    /*                          FUNCTIONS                                   */

    function class_setter() {
        if (window.innerWidth < 1400 && window.innerWidth > 1199) {
            return ('centered little_left');
        }
        if (window.innerWidth > 1400) {
            return ('centered w-75 m-auto');
        }
    }

    function animation_setter() {
        if (window.innerWidth < 768) {
            return ('');
        } else {
            return ('fly_up');
        }
    }

    function project_mapper() {
        return (
            projects.map((project, index) => {
                if (index === 0) {
                    return (
                        <div className={`cell y-space ${animation_setter()}`} key={index}>
                            <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                <img id={index} className='thumbnail' src={'../../img/p' + (index) + '_1.png'} alt={'project ' + index} />
                                <h5>
                                    {project.project_name}
                                </h5>
                            </a>
                        </div>
                    );
                } else if (index === 1) {
                    return (
                        <div className={`cell y-space ${animation_setter()}`} key={index}>
                            <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                <img id={index} className='thumbnail' src={'../../img/p' + (index) + '_1.png'} alt={'project ' + index} />
                                <h5>
                                    {project.project_name}
                                </h5>
                            </a>
                        </div>
                    );
                } else {
                    return (
                        <div className={`cell y-space ${animation_setter()}`} key={index}>
                            <a href={'/projects/' + index}>
                                <img id={index} className='thumbnail' src={'../../img/p' + (index) + '_1.png'} alt={'project ' + index} />
                                <h5>
                                    {project.project_name}
                                </h5>
                            </a>
                        </div>
                    );
                }
            }
            )
        );
    }

    /*                          RENDER                                   */
    if (projects) {
        if (window.innerWidth < 1400) {
            if (window.innerWidth > 1199) {
                return (
                    <div id='home_wrapper' className={`${class_setter()}`}>
                        <article className='portfolio-intro'>
                            <h1 className='hat'>
                                Hello!
                            </h1>
                            <p>
                                My name is Matthew Burtonshaw and I'm a JavaScript developer.
                                <br></br>
                                Welcome to my portfolio!
                                Click on a thumbnail to learn more about the projects I've worked on:
                            </p>
                        </article>
                        <a href='/about' className='btn-link-3'>About Me</a>
                        <article className='portfolio-project-thumbs'>
                            <div className='projects-box box grid'>
                                {
                                    project_mapper()
                                }
                            </div>
                        </article>
                    </div>
                );
            } else {
                return (
                    <div id='home_wrapper' className='centered m-auto'>
                        <article className='portfolio-intro'>
                            <h1 className='hat'>
                                Hello!
                            </h1>
                            <p>
                                My name is Matthew Burtonshaw and I'm a JavaScript developer.
                                <br></br>
                                Welcome to my portfolio!
                                Click on a thumbnail to learn more about the projects I've worked on:
                            </p>
                        </article>
                        <a href='/about' className='btn-link-3'>About Me</a>
                        <article className='portfolio-project-thumbs'>
                            <div className='projects-box box grid'>
                                {
                                    project_mapper()
                                }
                            </div>
                        </article>
                    </div>
                );
            }
        } else {
            return (
                <div className='row align-items-start'>
                    <div className='sidebar col' >
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
                    <div className='col port_wrapper'>
                        <div id='home_wrapper' className={`${class_setter()}`}>

                            <article className='portfolio-intro'>
                                <h1 className='hat'>
                                    Hello!
                                </h1>
                                <p>
                                    My name is Matthew Burtonshaw and I'm a JavaScript developer.
                                    <br></br>
                                    Welcome to my portfolio!
                                    Click on a thumbnail to learn more about the projects I've worked on:
                                </p>
                            </article>
                            <article className='portfolio-project-thumbs'>
                                <div className='projects-box box grid'>
                                    {
                                        project_mapper()
                                    }
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            );
        }
    }
}