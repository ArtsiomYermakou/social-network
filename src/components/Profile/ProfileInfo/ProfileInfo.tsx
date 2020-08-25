import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../../redux/profile-reducer";



const ProfileInfo = (props: any) => {

    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="123"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="profile"/>
                <ProfileStatus status={props.status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;