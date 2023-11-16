import React from 'react'
import './FooterComponent.css'

export default function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="footer_left">
                    <h4 className="biccas">Biccas</h4>
                    <p className="footer_des">Get started noew try our product</p>
                    <div className="footer-input">
                        <input type="email" className="input-footer" placeholder="  Enter your email here" />
                    </div>
                    <div class="enter"><i class="fa-solid fa-arrow-right enter_email"></i></div>
                </div>
                <div className="footer_right">
                    <div className="footer_col">
                        <h4 className="col_title">Support</h4>
                        <p className="col_des">Help center</p>
                        <p className="col_des">Account Information</p>
                        <p className="col_des">About</p>
                        <p className="col_des">Contact us</p>
                    </div>
                    <div className="footer_col">
                        <h4 className="col_title">Support</h4>
                        <p className="col_des">Talk to support</p>
                        <p className="col_des">Support docs</p>
                        <p className="col_des">System status</p>
                        <p className="col_des">Covid response</p>
                    </div>
                    <div className="footer_col">
                        <h4 className="col_title">Support</h4>
                        <p className="col_des">Update</p>
                        <p className="col_des">Security</p>
                        <p className="col_des">Beta test</p>
                        <p className="col_des">Pricing product</p>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    <p className="footer_left_txt">© 2022 Biccas Inc. Copyright and rights reserved.</p>
                </div>
                <div className="footer_bottom_right">
                    <p className="footer_left_right">Terms and Conditions - Privacy Policy</p>
                </div>
            </div>
        </>
    )
}
