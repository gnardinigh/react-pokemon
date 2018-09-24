import React from 'react'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:props.data.name,
            frontImage:props.data.sprites.front,
            backImage:props.data.sprites.back,
            displayFront:true
        }
    }

    handleClick = (e) => {
        this.setState({
            displayFront:!this.state.displayFront
        })
    }
    
    render() {
        return (
            <div className="pokemon-container">
                <div style={ {width:230 ,margin:10, background:'#fecd2f', color:'#2d72fc'} } className="pokemon-frame">
                <h1 className="center-text">{this.state.name}</h1>
                <div style={ {width:239, margin:'auto'} }>
                <div style={ {width:96,margin:'auto'} }>
                    <img src={this.state.displayFront? this.state.frontImage : this.state.backImage} />
                </div>
                </div>
                <p onClick={this.handleClick} style={{padding:10}} className="center-text flip-image" data-pokename="ivysaur" data-action="flip-image">flip card</p>
                </div>
            </div>
        )
    }
}

export default Pokemon