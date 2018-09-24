import React from 'react';
import logo from './pokemon.png';

export default function Image() {
    return (<div style={ {width:300,margin:'auto'} }>
                <img style={ {width:300} } src={logo} />
            </div>)
}