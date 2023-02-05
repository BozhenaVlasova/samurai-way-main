import React from 'react';
import style from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={style.avaAndDescription}>
                ava + description
            </div>
        </div>
    );
};