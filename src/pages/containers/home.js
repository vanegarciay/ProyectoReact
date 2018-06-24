import React, { Component } from 'react';
import HomeLayout from '../componentes/home-layout'
import Categories from '../../categories/componentes/categories';
import Related from '../componentes/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/componentes/modal';
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
    state = {
        modalVisible: false,
    }

    handleOpenModal = () => {
        this.setState({
            modalVisible: true,
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <VideoPlayer
                        autoplay={true}
                    />
                    <Categories categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;