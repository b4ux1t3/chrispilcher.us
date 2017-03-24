import Section from "./Section.jsx";
import React from 'react';

export default class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">			
                <div className="col-md-6 title_box">
                    <h1>CHRIS PILCHER'S PORTFOLIO</h1>
                    <h3>Programmer, Tech-lover, Time Lord</h3>
                </div>
            </div>
        );
    }
}