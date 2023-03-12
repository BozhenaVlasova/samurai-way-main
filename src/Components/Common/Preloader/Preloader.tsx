import React from 'react';
import preloader from '../../../Assets/images/loader.gif'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'loading...'}/>
        </div>
    );
};

export default Preloader;