import React from 'react'
import './StartedComponent.css'

import Group from '../../../assets/getStarted/Group.png'
import Colon from '../../../assets/getStarted/colon.png'
import Profile1 from '../../../assets/getStarted/icon1.png'
import Profile2 from '../../../assets/getStarted/icon2.png'
import Profile3 from '../../../assets/getStarted/icon3.png'
import Profile4 from '../../../assets/getStarted/icon4.png'
import Profile5 from '../../../assets/getStarted/icon5.png'


export default function Started() {
    return (
        <div className="started_container">
            <div className="start_left">
                <h3 className="started_title">People are Saying<br />About DoWhith</h3>
                <p className="started_des">Everything you need to accept to payment and grow your<br />money of manage anywhere on
                    planet</p>
                <img className="colon" src={Colon} alt="" />
                <p className="started_des">I am very helped by this E-wallet application , my days are<br />very easy to use this
                    application and its very helpful in my life ,<br />even I can pay a short time 😍</p>
                <p className="started_des">_ Aria Zinanrio</p>
                <div className="profile_icons">
                    <img className="profile_icon" src={Profile1} alt="" />
                    <img className="profile_icon" src={Profile2} alt="" />
                    <img className="profile_icon" src={Profile3} alt="" />
                    <img className="profile_icon" src={Profile4} alt="" />
                    <img className="profile_icon" src={Profile5} alt="" />
                </div>

            </div>
            <div className="start_right">
                <div className="the_form">
                    <img className="getstartedicon" src={Group} alt="" />
                    <p className="get_started_title">Get Started</p>
                    <div className="form">
                        <div className="email">
                            <label className="form-email">Email</label>
                            <input type="email" className="input-email" id="exampleInputEmail1" placeholder="   Enter your email" />
                        </div>
                        <div className="msg">
                            <label className="form-message">Message</label>
                            <textarea className="input-message" rows="3" placeholder="
  What are you say ?"></textarea>
                        </div>

                        <button className="request-demo">Request Demo</button>
                    </div>
                    <p className="start-trial">or <span className="bld">Start Free Trial</span></p>
                </div>
            </div>
        </div>
    )
}
