import React from 'react';
import Media from './media';
import './playlist.css';


function Playlist(props) {
    //const playlist = props.data.categories[0].playlist
    console.log(props.data)
    return (
        <div className='Playlist'>
        {
            props.playlist.map((item)=>{
                return <Media handleClick={props.handleOpenModal} {...item} key={item.id} /> // {...item} hace heredar del Json todas las propiedades sin tener que llamarlas 1 a 1, unicamente las propiedades que esta recibiendo media mediante props
            })
        }
        </div>
    )
}

export default Playlist;