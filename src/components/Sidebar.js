import { React } from 'react';
import ProfilePhoto from '../portfolio/img/ProfilePhoto.jpg';

export default function Sidebar() {


    if (window.innerWidth >= 1024 && window.innerWidth < 1196) {
        return(
            <div className='sidebar sidebar-longest' >
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
                        <p>
                            From working on a farm to working with the DOM; 
                            I am a full-stack JavaScript developer with a penchant 
                            for functionality in design.
                        </p>
                        <a href='/about'> 
                            Learn more 
                        </a>
                
                    </div>
                </div>
            </div>
        );
    }

    if (window.innerWidth >= 1196 && window.innerWidth < 1467) {
        return(
            <div className='sidebar sidebar-long' >
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
                        <p>
                            From working on a farm to working with the DOM; 
                            I am a full-stack JavaScript developer with a penchant 
                            for functionality in design.
                        </p>
                        <a href='/about'> 
                            Learn more 
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    if (window.innerWidth >= 1467 && window.innerWidth <= 1550) {
        return(
            <div className='sidebar sidebar-longer' >
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
                        <p>
                            From working on a farm to working with the DOM; 
                            I am a full-stack JavaScript developer with a penchant 
                            for functionality in design.
                        </p>
                        <a href='/about'> 
                            Learn more 
                        </a>
                
                    </div>
                </div>
            </div>
        );
    }

    else if (window.innerWidth >= 1550) {
        return(
            <div className='sidebar sidebar-extend' >
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
                        <p>
                            From working on a farm to working with the DOM; 
                            I am a full-stack JavaScript developer with a penchant 
                            for functionality in design.
                        </p>
                        <a href='/about'>
                            Learn more 
                        </a>
                
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className='sidebar' >

            </div>
        );
    }

}