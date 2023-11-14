import React from 'react'
import { Link } from 'react-router-dom';
import './HeroComponent.css'

import HeroImg from '../../../assets/Group-level.png'

export default function Hero() {
    return (
        <div className="hero_container">
            <div className="left">
                <div className="top">
                    <p className="hero_text">We're here to<br />increase your<br />Productivity</p>
                    <div className="horizontal_line"></div>
                    <p className="hero_des">Let's make your work more organized and easier using the Taskio Dashboard with many of the
                        latest features in managing work every day.</p>
                </div>
                <div className="bottom">
                    <Link to="/"><button className="trial_button">Try free Trial</button></Link>
                    <Link to="/" className="demo_button">
                        <i className="fa fa-play-circle" style={{ fontSize: '33px', marginRight: '5px' }}></i>
                        <span>View Demo</span>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className='img_div'>
                    <img className="hero_img" src={HeroImg} alt="/" />
                </div>
            </div>
        </div>
    )
}
