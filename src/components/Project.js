import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../portfolio/data.json';

export default function Project() {

    let [ projects, setProjects ] = useState();
    async function getProjects() {
        let info = data.data.projects;
        setProjects(info);
    }

    useEffect( () => { getProjects() }, [ setProjects ] );

    let id = useParams();

    if (projects) {
        let cred = id.id;
        let project = projects[cred];
        if (cred.toString() === project.id.toString()) {

            function block() {
                if (project.id === 6 || project.id === 7) {
                    return(
                        <div className='button_div'>
                            <a className='btn-link' target='_blank' href={project.github_link}>
                                Github Repo
                            </a>
                        </div>
                    );
                } else {
                    return(
                        <div className='button_div'>
                            <a className='btn-link' target='_blank' href={project.live_link}>
                                Live Demo
                            </a>
                            <a className='btn-link' target='_blank' href={project.github_link}>
                                Github Repo
                            </a>
                        </div>
                    );
                }
            };
            
            if ( project.id === 6 || project.id === 10 || project.id === 12 || project.id === 13 ) {
                return(
                    <div className='wrapper'>
                        <nav className='nav'>
                            <a href='/'>
                                Back
                            </a>
                        </nav>
                        <article className='portfolio-projects'>
                            <div className='inner-wrapper flex-row-wrap two-col'>
                                <div className='project-info-box box'>
                                    <h1>
                                        {project.project_name}
                                    </h1>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='project-tech-links-box box'>
                                    <h6>
                                        Technologies
                                    </h6>
                                        {
                                            project.technologies.map(
                                                (technology, index) => <p key={index}>{technology}</p>
                                            )
                                        }
                                    <br></br>
                                    {block()}
                                </div>
                            </div>
                            <div className='project-img-box box'>
                                <img className='project_img project_img_small' src={'../../img/p' + (project.id) + '_2.png'}/>
                                <img className='project_img project_img_small flashcard' src={'../../img/p' + (project.id) + '_3.png'}/>
                            </div>
                            <nav className='nav'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                        </article>
                    </div>
                )
                 
            } else {
                return(
                    <div className='wrapper'>
                        <nav className='nav'>
                            <a href='/'>
                                Back
                            </a>
                        </nav>
                        <article className='portfolio-projects'>
                            <div className='inner-wrapper flex-row-wrap two-col'>
                                <div className='project-info-box box'>
                                    <h1>
                                        {project.project_name}
                                    </h1>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='project-tech-links-box box'>
                                    <h6>
                                        Technologies
                                    </h6>
                                        {
                                            project.technologies.map(
                                                (technology, index) => <p key={index}>{technology}</p>
                                            )
                                        }
                                    <br></br>
                                    {block()}
                                </div>
                            </div>
                            <div className='project-img-box box'>
                                <img className='project_img project_img_small' src={'../../img/p' + (project.id) + '_2.png'}/>
                                <img className='project_img project_img_small flashcard' src={'../../img/p' + (project.id) + '_3.png'}/>
                                <img className='project_img project_img_small flashcard' src={'../../img/p' + (project.id) + '_4.png'}/>
                            </div>
                            <nav className='nav'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                        </article>
                    </div>
                )
            }
        }
    } 
}