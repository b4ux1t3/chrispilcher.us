import React from "react";

// Section will represent the individual sections of the site (About me, portfolio, etc)
export default class Section extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className= {"container-fluid " + this.props.sectionName} />
        );
    }
}