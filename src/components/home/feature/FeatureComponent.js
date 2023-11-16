import React from 'react'
import './FeatureComponent.css'
import Feature1 from '../../../assets/feature/feature-two.png'
import Feature2 from '../../../assets/feature/feature-one.png'
import Feature3 from '../../../assets/feature/feature-three.png'


export default function Features() {
  return (
    <div className="features_container">
        <div className="feature_top">
            <h2 className="top_title">Our Features<br /> you cab get</h2>
            <p className="top_des">We offer a variety of interesting features that you can<br /> help increase yor productivity
                at work and manage<br /> your projrct esaly</p>
            <a href=""><button className="top_button">Get Started</button></a>
        </div>

        <div className="feature_bottom">
            <div className="feature">
                <img className="feature_img" src={Feature1} alt="" />
                <div className="feature_info">
                    <h3 className="feature_title">Collboration Teams</h3>
                    <p className="feature_des">Here you can handle projects together with team virtually</p>
                </div>
            </div>
            <div className="feature">
                <img className="feature_img" src={Feature2} alt="" />
                <div className="feature_info">
                    <h3 className="feature_title">Cloud Storage</h3>
                    <p className="feature_des">No nedd to worry about storage because we provide storage up to 2 TB</p>
                </div>
            </div>
            <div className="feature">
                <img className="feature_img" src={Feature3} alt="" />
                <div className="feature_info">
                    <h3 className="feature_title">Daily Analytics</h3>
                    <p className="feature_des">We always provide useful informatin to make it easier for you every day</p>
                </div>
            </div>
        </div>
    </div>
  )
}
