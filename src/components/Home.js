import { React, useState, useEffect } from 'react';
import data from '../portfolio/data.json';



export default function Home() {

    let [ projects, setProjects ] = useState();

    async function getProjects() {
        let info = data.data.projects;
        setProjects(info);
    }

    useEffect( () => { getProjects() }, [ setProjects ] );

    if (projects) {
        if (window.innerWidth < 626) {
            return(
                <div id='home_wrapper' className='wrapper centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index === 0) {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                    <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    } else if (index === 1) {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                    <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    } else {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

        if (window.innerWidth >= 626 && window.innerWidth < 897) {
            return(
                <div id='home_wrapper' className='wrapper centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 4) {
                                        if (index === 0) {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>{project.project_name}</h5>
                                                    </a>
                                                </div>
                                            );
                                        } else if (index === 1) {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'/projects/' + index}>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }
                
        if (window.innerWidth >= 897 && window.innerWidth < 1025) {
            return(
                <div id='home_wrapper' className='wrapper centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 6) {
                                        if (index === 0) {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else if (index === 1) {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            )
                                        } else {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'/projects/' + index}>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

        if (window.innerWidth >= 1025 && window.innerWidth < 1196) {
            return(
                <div id='home_wrapper' className='wrapper centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 4) {
                                        if (index === 0) {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else if (index === 1) {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else {
                                            return(
                                                <div className='cell' key={index}>
                                                    <a href={'/projects/' + index}>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

        if (window.innerWidth >= 1196 && window.innerWidth < 1467) {
            return(
                <div id='home_wrapper' className='wrapper centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 6) {
                                        if (index === 0) {
                                            return(
                                                <div className='cell small-y-space' key={index}>
                                                    <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else if (index === 1) {
                                            return(
                                                <div className='cell small-y-space' key={index}>
                                                    <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else {
                                            return(
                                                <div className='cell small-y-space' key={index}>
                                                    <a href={'/projects/' + index}>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

        if (window.innerWidth >= 1467 && window.innerWidth <= 1550) {
            return(
                <div id='home_wrapper' className='wrapper-right centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 6) {
                                        if (index === 0) {
                                            return(
                                                <div className='cell y-space' key={index}>
                                                    <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else if (index === 1) {
                                            return(
                                                <div className='cell y-space' key={index}>
                                                    <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else {
                                            return(
                                                <div className='cell y-space' key={index}>
                                                    <a href={'/projects/' + index}>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div className='cell' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

        else if (window.innerWidth >= 1550) {
            return(
                <div id='home_wrapper' className='wrapper-right centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 8) {
                                        if (index === 0) {
                                            return(
                                                <div className='cell y-space' key={index}>
                                                    <a href={'https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a#gs.6bfdvx'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else if (index === 1) {
                                            return(
                                                <div className='cell y-space' key={index}>
                                                    <a href={'http://twopinesdevelopment.com/Tech_Resume.pdf'} target='_blank'>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        } else {
                                            return(
                                                <div className='cell y-space' key={index}>
                                                    <a href={'/projects/' + index}>
                                                        <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                        <h5>
                                                            {project.project_name}
                                                        </h5>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    } else {
                                        return(
                                            <div className='cell y-space' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

        else if (window.innerWidth >= 2050) {
            return(
                <div id='home_wrapper' className='wrapper-righter centered'>
                    <article className='portfolio-intro'>
                        <h1 id='hat'className='hat'>
                            Welcome!
                        </h1>
                        <p id='shirt'>
                            My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                            Click on a project thumbnail to learn more about my apps:
                        </p>
                    </article>
                    <article className='portfolio-project-thumbs'>
                        <div className='projects-box box grid'>
                            { projects.map((project, index) =>
                                {
                                    if (index < 8) {
                                        return(
                                            <div className='cell y-space' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    } else {
                                        return(
                                            <div className='cell y-space' key={index}>
                                                <a href={'/projects/' + index}>
                                                    <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                    <h5>
                                                        {project.project_name}
                                                    </h5>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </article>
                </div>
            );
        }

    } else {
        return(
            <div>
                Nope
            </div>
        );
    }

}