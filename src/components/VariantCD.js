import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../portfolio/data.json';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function Variant() {

    /*                          ASYNC FUNCTIONS                             */

    let [projects, setProjects] = useState();
    async function getProjects() {
        if (window.location.pathname === '/projects/variant/1') {
            let info = [data.data.projects[3]];
            setProjects(info);
        }
        if (window.location.pathname === '/projects/variant/2') {
            let info = [data.data.projects[3]];
            setProjects(info);
        }
    }

    useEffect(() => { getProjects() }, [setProjects]);

    /*                          FUNCTIONS                                   */

    if (projects) {


        function link_sorter() {
            if (window.location.pathname === '/projects/variant/1') {
                return (
                    <div className='button_div'>
                        <a className='btn-link' target='_blank' href={projects[0].live_link_1}>
                            Live Demo
                        </a>
                        <a className='btn-link' target='_blank' href={projects[0].github_link_1}>
                            Github Repo
                        </a>
                    </div>
                );
            } else {
                if (window.location.pathname === '/projects/variant/2') {
                    return (
                        <div className='button_div'>
                            <a className='btn-link' target='_blank' href={projects[0].live_link_2}>
                                Live Demo
                            </a>
                            <a className='btn-link' target='_blank' href={projects[0].github_link_2}>
                                Github Repo
                            </a>
                        </div>
                    );
                }
            };
        }

        function pic_counter() {
            if (window.location.pathname === '/projects/variant/1') {
                return (
                    <div>
                        <img className='project_img project_img_small my-1 project_pic_border' src={projects[0].image_urls[1]} />
                        <img className='project_img project_img_small my-1 project_pic_border' src={projects[0].image_urls[2]} />
                        <img className='project_img project_img_small my-1 project_pic_border' src={projects[0].image_urls[3]} />
                    </div>
                );
            } else if (window.location.pathname === '/projects/variant/2') {
                return (
                    <div>
                        <img className='project_img project_img_small my-1 project_pic_border' src={projects[0].image_urls[6]} />
                        <img className='project_img project_img_small my-1 project_pic_border' src={projects[0].image_urls[7]} />
                        <img className='project_img project_img_small my-1 project_pic_border' src={projects[0].image_urls[5]} />
                    </div>
                );
            }
        }

        function technology_mapper() {
            return (
                projects[0].technologies.map(
                    (technology, index) => <p key={index}>{technology}</p>
                )
            );
        }

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
                                        technology_mapper()
                                    }
                                    <br></br>
                                    {link_sorter()}
                                </div>
                            </div>
                            <div className='project-img-box'>
                                {pic_counter()}
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
                                        technology_mapper()
                                        }
                                    <br></br>
                                    {link_sorter()}
                                </div>
                            </div>
                            <div className='project-img-box box'>
                                {pic_counter()}
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
                                        <p className='py-3'>
                                            {projects[0].description}
                                        </p>
                                    </div>
                                    <div className='project-tech-links-box box col w-25 m-auto'>
                                        <h6>
                                            Technologies
                                        </h6>
                                        {
                                            technology_mapper()
                                            }
                                        <br></br>
                                        {link_sorter()}
                                    </div>
                                </div>
                            </div>
                            <div className='project-img-box box fly_up'>

                                {pic_counter()}
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