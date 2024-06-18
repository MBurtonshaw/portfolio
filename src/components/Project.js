import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../portfolio/data.json';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function Project() {

    /*                          ASYNC FUNCTIONS                             */

    let [projects, setProjects] = useState();
    async function getProjects() {
        let info = data.data.projects;
        setProjects(info);
    }

    useEffect(() => { getProjects() }, [setProjects]);

    /*                          FUNCTIONS                                   */

    let id = useParams();

    if (projects) {
        let cred = id.id;
        let project = projects[cred];
        if (cred.toString() === project.id.toString()) {

            function link_sorter() {
                if (project.id === 6) {
                    return (
                        <div className='button_div'>
                            <a className='btn-link' target='_blank' href={project.live_link}>
                                Live Demo - Original
                            </a>
                            <a className='btn-link' target='_blank' href={project.github_link}>
                                Github Repo - Original
                            </a>
                            <a className='btn-link' target='_blank' href={'https://cd-react.vercel.app/'}>
                                Live Demo - React Redo
                            </a>
                            <a className='btn-link' target='_blank' href={'https://github.com/MBurtonshaw/cd_react'}>
                                Github Repo - React Redo
                            </a>
                        </div>
                    );
                } else if (project.live_link !== '' && project.live_link != null) {
                    return (
                        <div className='button_div'>
                            <a className='btn-link' target='_blank' href={project.live_link}>
                                Live Demo
                            </a>
                            <a className='btn-link' target='_blank' href={project.github_link}>
                                Github Repo
                            </a>
                        </div>
                    );
                } else {
                    return (
                        <div className='button_div'>
                            <a className='btn-link' target='_blank' href={project.github_link}>
                                Github Repo
                            </a>
                        </div>
                    );
                }
            };

            function pic_counter() {
                if (project.id !== 7 && project.id !== 11 && project.id !== 13 && project.id !== 14) {
                    if (window.innerWidth < 768) {
                        return (
                            <img className='project_img project_img_small mt-1 project_pic_border' src={project.image_urls[3]} />
                        );
                    } else {
                        return (
                            <img className='project_img project_img_small mt-1 project_pic_border' src={project.image_urls[3]} />
                        );
                    }
                } else {
                    return null;
                }
            }

            /*                          RENDER                                   */

            if (window.innerWidth < 1250) {
                if (window.innerWidth < 768) {
                    return (
                        <div>
                            <nav className='nav mx-3'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                            <article className='text-center'>
                                <div className='inner-wrapper flex-row-wrap'>
                                    <div className='project-info-box box'>
                                        <h1 className='py-2 pb-4'>
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
                                        {link_sorter()}
                                    </div>
                                </div>
                                <div className='project-img-box'>
                                    <img className='project_img project_img_small mt-1 project_pic_border' src={project.image_urls[1]} />
                                    <img className='project_img project_img_small mt-1 project_pic_border' src={project.image_urls[2]} />
                                    {pic_counter()}
                                </div>
                            </article>
                            <nav className='nav mx-3'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                        </div>
                    );
                } else {
                    return (
                        <div className='px-1'>
                            <nav className='nav mx-3'>
                                <a href='/'>
                                    Back
                                </a>
                            </nav>
                            <article className='portfolio-projects-small'>
                                <div className='inner-wrapper flex-row-wrap two-col'>
                                    <div className='project-info-box box m-auto text-center'>
                                        <h1>
                                            {project.project_name}
                                        </h1>
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className='project-tech-links-box box m-auto'>
                                        <h6>
                                            Technologies
                                        </h6>
                                        {
                                            project.technologies.map(
                                                (technology, index) => <p key={index}>{technology}</p>
                                            )
                                        }
                                        <br></br>
                                        {link_sorter()}
                                    </div>
                                </div>
                                <div className='project-img-box box m-auto'>
                                    <img className='project_img project_img_small my-1 project_pic_border' src={project.image_urls[1]} />
                                    <img className='project_img project_img_small my-1 project_pic_border' src={project.image_urls[2]} />
                                    {pic_counter()}
                                </div>
                                <nav className='nav mx-3'>
                                    <a href='/'>
                                        Back
                                    </a>
                                </nav>
                            </article>
                        </div>

                    );
                }
            } else if (window.innerWidth > 1500) {
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
                                                {project.project_name}
                                            </h1>
                                            <p className='py-3 text-center'>
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className='project-tech-links-box box col w-25 m-auto'>
                                            <h6>
                                                Technologies
                                            </h6>
                                            {
                                                project.technologies.map(
                                                    (technology, index) => <p key={index}>{technology}</p>
                                                )
                                            }
                                            <br></br>
                                            {link_sorter()}
                                        </div>
                                    </div>
                                </div>
                                <div className='project-img-box box fly_up'>
                                    <img className='project_img project_img_small m-auto my-1 project_pic_border' src={project.image_urls[1]} />
                                    <img className='project_img project_img_small m-auto my-1 project_pic_border' src={project.image_urls[2]} />
                                    {pic_counter()}
                                </div>
                                <nav className='nav mx-3'>
                                    <a href='/'>
                                        Back
                                    </a>
                                </nav>
                            </article>
                        </div>
                    </div>
                )
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
                            <article className=''>
                                <div className='inner-wrapper flex-row-wrap two-col'>
                                    <div className='row align-items-start'>
                                        <div className='project-info-box box col w-75 m-auto'>
                                            <h1 className='text-center'>
                                                {project.project_name}
                                            </h1>
                                            <p className='py-3 text-center'>
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className='project-tech-links-box box col w-25 m-auto'>
                                            <h6>
                                                Technologies
                                            </h6>
                                            {
                                                project.technologies.map(
                                                    (technology, index) => <p key={index}>{technology}</p>
                                                )
                                            }
                                            <br></br>
                                            {link_sorter()}
                                        </div>
                                    </div>
                                </div>
                                <div className='project-img-box box fly_up'>
                                    <img className='project_img project_img_small m-auto my-1 project_pic_border' src={project.image_urls[1]} />
                                    <img className='project_img project_img_small m-auto my-1 project_pic_border' src={project.image_urls[2]} />
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
}