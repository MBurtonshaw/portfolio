import { React, useState, useEffect } from 'react';
import data from '../portfolio/data.json';



export default function Home(props) {
    let [ projects, setProjects ] = useState();

    async function getProjects() {
        let info = data.data.projects;
        setProjects(info);
    }

    useEffect( () => { getProjects() }, [ setProjects ] );
    if (projects) {
        return(
            <div id='home_wrapper' className='wrapper'>
                
                <article className='portfolio-intro'>
                    <h1 id='hat'className='hat'>Hey, Potential Employers!</h1>
                    <p id='shirt'>My name is Matthew Burtonshaw and I'm a full-stack JavaScript developer. Welcome to my portfolio!
                    Click on a project thumbnail to learn more about my apps:</p>
                </article>
                <article className='portfolio-project-thumbs'>
                    <div className='projects-box box grid'>
                    { projects.map((project, index) =>
                        {
                            
                            if (window.innerWidth < 626) {
                                //one
                                
                                if (index < 1) {
                                    return(
                                    <div className='cell' key={index}>
                                        <a href={'/projects/' + index}>
                                            <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                            <h5>{project.project_name}</h5>
                                        </a>
                                    </div>
                                    );
                                } else {
                                    return(
                                        <div className='cell' key={index}>
                                            <a href={'/projects/' + index}>
                                                <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                <h5>{project.project_name}</h5>
                                            </a>
                                        </div>
                                    );
                                }

                            }

                            if (window.innerWidth >= 626 && window.innerWidth < 1025) {
                                //two w/o pic
                                
                                if (index < 6) {
                                    return(
                                    <div className='cell' key={index}>
                                        <a href={'/projects/' + index}>
                                            <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                            <h5>{project.project_name}</h5>
                                        </a>
                                    </div>
                                    );
                                } else {
                                    return(
                                        <div className='cell' key={index}>
                                            <a href={'/projects/' + index}>
                                                <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                <h5>{project.project_name}</h5>
                                            </a>
                                        </div>
                                    );
                                }

                            }

                            if (window.innerWidth >= 1025 && window.innerWidth < 1196) {
                                //two w pic
                                
                                if (index < 4) {
                                    return(
                                    <div className='cell' key={index}>
                                        <a href={'/projects/' + index}>
                                            <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                            <h5>{project.project_name}</h5>
                                        </a>
                                    </div>
                                    );
                                } else {
                                    return(
                                        <div className='cell' key={index}>
                                            <a href={'/projects/' + index}>
                                                <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                <h5>{project.project_name}</h5>
                                            </a>
                                        </div>
                                    );
                                }

                            }

                            if (window.innerWidth >= 1196 && window.innerWidth < 1467) {
                                //three
                                
                                if (index < 3) {
                                    return(
                                    <div className='cell' key={index}>
                                        <a href={'/projects/' + index}>
                                            <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                            <h5>{project.project_name}</h5>
                                        </a>
                                    </div>
                                    );
                                } else {
                                    return(
                                        <div className='cell' key={index}>
                                            <a href={'/projects/' + index}>
                                                <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                <h5>{project.project_name}</h5>
                                            </a>
                                        </div>
                                    );
                                }

                            }

                            else if (window.innerWidth >= 1467) {
                                //four
                                
                                if (index < 4) {
                                    return(
                                    <div className='cell' key={index}>
                                        <a href={'/projects/' + index}>
                                            <img id={index} className='thumbnail' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                            <h5>{project.project_name}</h5>
                                        </a>
                                    </div>
                                    );
                                } else {
                                    return(
                                        <div className='cell' key={index}>
                                            <a href={'/projects/' + index}>
                                                <img id={index} className='thumbnail flashcard' src= {'../../img/p' + (index) +'_1.png'} alt={'project ' + index}/>
                                                <h5>{project.project_name}</h5>
                                            </a>
                                        </div>
                                    );
                                }

                            }


                            
                        }
                        )}
                    </div>
                </article>
                    
                    
            </div>
        );
    } else {
        return <div>Nope</div>
    }

}