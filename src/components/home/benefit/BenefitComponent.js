import React from 'react'
import './BenefitComponent.css'

import MainBenefit from '../../../assets/benefit/main_benefit.png'
import Benefit1 from '../../../assets/benefit/benefit1.png'
import Benefit2 from '../../../assets/benefit/benefit2.png'
import Benefit3 from '../../../assets/benefit/benefit3.png'
import Benefit4 from '../../../assets/benefit/benefit4.png'


export default function Benefit() {
  return (
    <div class="benefit_container">
        <div class="benefit_info">
            <h2 class="benefit_title">What Benifit Will<br />You Get</h2>
            <div class="all_benefits">
                <ul>
                    <li class="benefit_list"><i class="fa-solid fa-circle-check tick"></i>Free Consulting With Experet Saving Money</li>
                    <li class="benefit_list"><i class="fa-solid fa-circle-check tick"></i>Online Banking</li>
                    <li class="benefit_list"><i class="fa-solid fa-circle-check tick"></i>Investment Report Every Month</li>
                    <li class="benefit_list"><i class="fa-solid fa-circle-check tick"></i>Saving Money For The Future</li>
                    <li class="benefit_list"><i class="fa-solid fa-circle-check tick"></i>Online Transection</li>
                </ul>
            </div>
        </div>
        <div class="benefit_imgs">
            <img class="main" src={MainBenefit} alt="" />
            <img class="grp1" src={Benefit1} alt="" />
            <img class="grp2" src={Benefit2} alt="" />
            <img class="grp3" src={Benefit3} alt="" /> 
            <img class="grp4" src={Benefit4} alt="" />
        </div>
    </div>
  )
}
