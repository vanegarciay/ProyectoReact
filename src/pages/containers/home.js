import React, { Component } from 'react';
import HomeLayout from '../componentes/home-layout'
import Categories from '../../categories/componentes/categories';
import Related from '../componentes/related';

class Home extends Component {
    render() {
        return(
            <HomeLayout>
                <Related />
                <Categories categories={this.props.data.categories} />
            </HomeLayout>
        )
    }
}

export default Home