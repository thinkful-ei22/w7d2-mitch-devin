import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasBeenClicked: false};
    }


    
    render() {
        // Show the button to start with
        if(!this.state.hasBeenClicked) {
            return (<SurpriseButton handleClickSurprised={val=>
                        this.setState({hasBeenClicked:true}) } />);
        } else 
            return (<SurpriseImage />);
    }
}
