import React from 'react';
import { render } from 'react-dom';
//import Playlist from './src/playlist/componentes/playlist'
import data from '../api.json';
import Home from '../pages/containers/home'

const homeContainer = document.getElementById('home-container')
//const holaMundo = <h1>mundillo cruel</h1>;
render(<Home data={data} /> , homeContainer);