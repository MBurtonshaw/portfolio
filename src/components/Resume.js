import { React } from 'react';
import resume_pic from '../portfolio/img/Resume-1.png'

export default function Resume() {
    return(
        <div className='wrapper'>
            <div className='resume-wrapper'>
                <div id='link-wrapper' className=''>
                    <a className='wrapped_link_left' href='https://www.credential.net/1c38bf64-c9b4-4fe0-a6b7-612560765a2a'>TechDegree</a>
                    
                    <a className='wrapped_link_right' href='/'>Portfolio</a>
                </div>
                <img className='resume-pic' src={resume_pic}></img>
            </div>
        </div>
    );
}