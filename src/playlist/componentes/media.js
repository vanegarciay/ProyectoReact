import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
        //this.handleClick = this.handleClick.bind(this) gracias a ES7 si las funciones se hacen por arrow function no es necesario hacer bind de esa funcion, teniendo configurado previamente en el webpack 'stage-2';
    }

    handleClick = (event) =>{
        this.props.openModal(this.props);
    }
    render() {
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                    src={this.props.cover}
                    alt=""
                    width={260}
                    height={160}
                    className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type : PropTypes.oneOf(['video', 'audio']),
}

export default Media;