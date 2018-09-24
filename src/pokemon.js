import React from 'react'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:props.data.name,
            frontImage:props.data.sprites.front,
            backImage:props.data.sprites.back
        }
    }
    
    render() {
        return (
            <div className="pokemon-container">
                <div style={ {width:230 ,margin:10, background:'#fecd2f', color:'#2d72fc'} } className="pokemon-frame">
                <h1 className="center-text">{this.state.name}</h1>
                <div style={ {width:239, margin:'auto'} }>
                <div style={ {width:96,margin:'auto'} }>
                    <img src={this.state.frontImage} />
                </div>
                </div>
                <p style={{padding:10}} className="center-text flip-image" data-pokename="ivysaur" data-action="flip-image">flip card</p>
                </div>
            </div>
        )
    }
}

export default Pokemon