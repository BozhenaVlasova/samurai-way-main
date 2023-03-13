import React from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={style.avaAndDescription}>
                <img src={props.profile.photos.large} alt={'user photo'}/>
                ava + description
            </div>
        </div>
    );
};