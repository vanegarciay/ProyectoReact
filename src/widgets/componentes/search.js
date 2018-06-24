import React from 'react';
import './search.css';

/*function Search(props) {
    return (

    )
} Otra forma de hacer un componente funcional y ahorrarnos el return es en un arrow function como se muestra abajo*/

const Search = (props) => (
    <form className='Search' onSubmit={props.handleSubmit}>
        <input
        ref={props.setRef}
        name='search'
        type="text"
        placeholder='Busca tu video favorito'
        className='Search-input'
        onChange={props.handleChange}
        value={props.value}
        />
    </form>
)

export default Search;