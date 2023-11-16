import React from 'react'
import './CollabComponent.css'

import Grammarly from '../../../assets/collab/grammerly.png'
import Unsplash from '../../../assets/collab/unsplash.png'
import Notion from '../../../assets/collab/notion.png'
import Descript from '../../../assets/collab/descript.png'
import Intercom from '../../../assets/collab/intercom.png'


export default function Collab() {
    return (
        <div className="collab_container">
            <p className="collab_title">
                More than 25,000 teams use Collabs
            </p>
            <div className="all_collabs">
                <img className="collab_img" src={Unsplash} alt="" />
                <img className="collab_img" src={Notion} alt="" />
                <img className="collab_img" src={Intercom} alt="" />
                <img className="collab_img" src={Descript} alt="" />
                <img className="collab_img" src={Grammarly} alt="" />
            </div>
        </div>
    )
}
