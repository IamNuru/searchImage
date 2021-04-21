import React, { Component } from 'react'

class ImageCard extends Component {

    constructor(props){
        super(props)

        this.state = { span : 0 }

        this.imageRef = React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load' , this.setState(this.setSpan))
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/150);

        this.setState({span})

    }

    render() {

        const { description , urls } = this.props.image;

        return (
            <div style={{ gridRowEnd:`span ${this.state.span}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;