import React from 'react';
import FullScreenIcon from '../../icons/componentes/full-screen'
import './fullScreen.css';

function FullScreen(props) {
    return (
        <div
        className='FullScreen'
        onClick={props.handleFullScreenClick}
        >
            <FullScreenIcon
                size={25}
                color="white"
            />
        </div>
    )
}

export default FullScreen;