import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../portfolio/data.json';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function Filter() {

    /*                          ASYNC FUNCTIONS                             */

    let [projects, setProjects] = useState();
    async function getProjects() {

        let info = [data.data.projects[3]];
        setProjects(info);

    }

    useEffect(() => { getProjects() }, [setProjects]);

    /*                          FUNCTIONS                                   */

    if (projects) {






        /*                          RENDER                                   */

        if (window.innerWidth < 1400) {
            if (window.innerWidth < 768) {
                return (
                    <div>
                        <nav className='nav text-center'>
                            <a href='/'>
                                Back
                            </a>
                        </nav>
                        <article className='text-center'>
                            <div className='inner-wrapper flex-row-wrap'>
                                <div className='project-info-box box'>
                                    <h1 className='py-2 pb-4'>
                                        {projects[0].project_name}
                                    </h1>
                                    <p>
                                        {projects[0].description}
                                    </p>
                                </div>
                                <div className='project-tech-links-box box'>
                                    <h6>
                                        Technologies
                                    </h6>
                                    {

                                    }
                                    <br></br>

                                </div>
                            </div>
                            <div className='project-img-box'>

                            </div>
                        </article>
                        <nav className='nav text-center'>
                            <a href='/'>
                                Back
                            </a>
                        </nav>
                    </div>
                );
            } else {
                return (
                    <div>
                        <nav className='nav'>
                            <a href='/'>
                                Back
                            </a>
                        </nav>
                        <article className='portfolio-projects'>
                            <div className='inner-wrapper flex-row-wrap two-col'>
                                <div className='project-info-box box'>
                                    <h1>
                                        {projects[0].project_name}
                                    </h1>
                                    <p>
                                        {projects[0].description}
                                    </p>
                                </div>
                                <div className='project-tech-links-box box'>
                                    <h6>
                                        Technologies
                                    </h6>
                                    {

                                    }
                                    <br></br>

                                </div>
                            </div>
                            <div className='project-img-box box'>

                            </div>
                            <nav className='nav'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                        </article>
                    </div>
                );
            }
        } else {
            return (
                <div className='row align-items-start'>
                    <div className='sidebar_proj col' >
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
                        <article className='portfolio-projects'>
                            <div className='inner-wrapper flex-row-wrap two-col'>
                                <div className='row align-items-start'>
                                    <div className='project-info-box box col w-75 m-auto'>
                                        <h1 className='text-center'>
                                            {projects[0].project_name}
                                        </h1>
                                        <p className='py-3 text-center'>
                                            {projects[0].description}
                                        </p>
                                    </div>
                                    <h3 className='text-center'>Choose a theme:</h3>
                                    <div className='row align-items-start w-75 mx-auto my-5'>
                                        <a className='col' href='/projects/variant/1'><div className='p-5 mx-1' style={{ backgroundColor: 'rgb(147, 28, 28)' }}><h3 className='text-center nonchalant'>Theme 1</h3></div></a>
                                        

                                        <a className='col' href='/projects/variant/2'><div className='p-5 mx-1' style={{ backgroundColor: 'rgb(12, 28, 48)' }}><h3 className='text-center nonchalant'>Theme 2</h3></div></a>

                                    </div>
                                </div>
                            </div>
                            <div className='project-img-box box fly_up'>


                            </div>
                            <nav className='nav'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                        </article>
                    </div>
                </div>
            )
        }
    }

}