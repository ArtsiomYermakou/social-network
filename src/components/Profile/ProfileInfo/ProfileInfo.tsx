import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import {updateStatus} from "../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/businessperson-computer-icons-avatar-clip-art-avatar.jpg";

const ProfileInfo = (props: any) => {

    if(!props.profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt="profile"/><br/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;