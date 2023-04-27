import { React } from 'react';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function Sidebar() {

    return(
        <div className='sidebar' >
            <div className='sidebar-info-box'>
                <br></br>
                <div className='thumbnail-box'>
                    <a href='/'>
                        <img className='thumbnail' src={ProfilePhoto} />
                    </a>
                </div>
                <div className='dev-intro-box'>
                    <h5>MATTHEW BURTONSHAW</h5>
                    <p>From working on a farm to working with the DOM; 
                        I am a full-stack JavaScript developer with a penchant 
                        for functionality in design.</p>
                    <a href='/about'> Learn more </a>
            
                </div>
            </div>
        </div>
    );

}