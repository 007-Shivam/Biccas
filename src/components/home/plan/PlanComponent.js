import React from 'react'
import './PlanComponent.css'
import PlanBg from '../../../assets/plan/planbg.png'

export default function Plan() {
  return (
    <div className="plan">
        <div className="plan_top">
            <div className="plan_title_div">
                <h2 className="plan_title">Choose Plan<br />That’s Right For You</h2>
                <p className="plan_des">Choose plan that works best for you, feel free to contact us</p>
            </div>
            <div className="plan_buttons">
                <div className="button_container">
                    <li className="monthly">Bill Monthly</li>
                    <button className="yearly">
                        <li>Bill Yearly</li>
                    </button>
                </div>
            </div>
        </div>



        <div className="plan_bottom">
            <div className='fake'></div>
            <div className='fake'></div>
            <div className='fake'></div>
            
            <div className="plan_card">
                <div className="plan_card_top">
                    <h4 className="plan_card_title">Free</h4>
                    <p className="plan_card_des">Have a go and test your<br />superpowers</p>
                    <p className="dollar">$</p>
                    <p className="cost">0</p>
                </div>
                <div className="plan_card_bottom">
                    <div className="plan_features">
                        <ul>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>2 Users</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>2 Files</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Public Share & Comments
                            </li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Char Support</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>New Income Apps</li>
                        </ul>
                        <button className="buy">Signup for Free</button>
                    </div>
                </div>
            </div>


            <div className="plan_card_mid">
                <div className="plan_card_top">
                    <h4 className="plan_card_title pro_title">Pro</h4>
                    <p className="plan_card_des pro_des">Experiment the power of infinite<br />possibilities</p>
                    <p className="pro_dollar">$</p>
                    <p className="pro_cost">8</p>
                    <button className="dummy">Save $50 a year</button>
                </div>

                <img src={PlanBg} className="plan_bg" alt="" />
                <div className="plan_card_bottom pro">
                    <div className="plan_features">
                        <ul>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>4 Users</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>All Apps</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Unlimited editable exports</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Folders and collaboration</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>All incoming apps</li>
                        </ul>
                        <button className="pro_buy">Go to Pro</button>

                    </div>
                </div>
            </div>

            <div className="plan_card">
                <div className="plan_card_top">
                    <h4 className="plan_card_title">Business</h4>
                    <p className="plan_card_des">Unveil new superpowers<br />and join the Design Leaque</p>
                    <p className="dollar">$</p>
                    <p className="cost">16</p>
                </div>
                <div className="plan_card_bottom">
                    <div className="plan_features">
                        <ul>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>All the features of pro plan</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Account success Manager</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Single Sign-On (SSO)</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Co-conception pogram</li>
                            <li className="plan_list"><i className="fa-solid fa-circle-check tick"></i>Collaboration-Soon</li>
                        </ul>
                        <button className="buy">Go to Business</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
