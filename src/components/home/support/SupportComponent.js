import React from 'react'
import './SupportComponent.css'

import Icon1 from '../../../assets/icon-one.png'
import Icon2 from '../../../assets/icon-one.png'
import Icon3 from '../../../assets/icon-one.png'


export default function Support() {
  return (
    <div className="support_container">
        <div className="support_left">
            <div className="support_title_div">
                <p className="support_title">How we support our pratner all over the world</p>
            </div>
            <div className="support_des_div">
                <p className="support_des">
                    SaaS become a common delivery model for many business application, including office software,
                    messaging software, payroll processing software, DBMS software, management software
                </p>
            </div>
            <div className="support_rating_div">
                <div className="rating_main">
                    <ul className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </ul>
                    <h6 className="the_rating">4.9 / <span className="out-off">5 rating</span></h6>
                    <p className="rating_name">databricks</p>
                </div>
                <div className="rating_main">
                    <ul className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </ul>
                    <h6 className="the_rating">4.8 / <span className="out-off">5 rating</span></h6>
                    <p className="rating_name">Chainalysis</p>
                </div>
            </div>
        </div>

        <div className="support_right">
            <div className="traits">
                <img src={Icon1} alt="" className="icon" />
                <div className="trait_content">
                    <h4 className="trait_title">Publishing</h4>
                    <p className="box_des">Plan, collaborate, and publishing your contetn<br /> that drivees meaningful engagement and growth<br /> for your barnd</p>
                </div>
            </div>
            <div className="traits">
                <img src={Icon2} alt="" className="icon" />
                <div className="trait_content">
                    <h4 className="trait_title">Analytics</h4>
                    <p className="box_des">Analyze your performance and create goegeous<br />report</p>
                </div>
            </div>
            <div className="traits">
                <img src={Icon3} alt="" className="icon" />
                <div className="trait_content">
                    <h4 className="trait_title">Engagement</h4>
                    <p className="box_des">Quiuckly navigate you anda engage with your<br />adience</p>
                </div>
            </div>
        </div>
    </div>
  )
}
