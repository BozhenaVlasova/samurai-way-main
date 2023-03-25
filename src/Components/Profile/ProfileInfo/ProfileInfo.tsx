import React from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../Assets/images/user.png"
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile.userId) {
        return <Preloader/>
    }
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={style.avaAndDescription}>
                <div>
                    <img src={!props.profile.photos.large ? userPhoto : props.profile.photos.large} alt={'user photo'}/>
                </div>
                {props.profile.fullName}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};