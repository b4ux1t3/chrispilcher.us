import React from 'react';

export default class PictureBox extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="picturebox">
                <img id="picturebox" src={this.props.src} />
            </div>
        );
    }
}