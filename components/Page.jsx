import React from "react";
import NavBar from "./Navbar.jsx";
import Section from "./Section.jsx";

// Page represents the page as a whole, much like App usually represents an application
export default class Page extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <NavBar />
                <Section sectionName="title"/>
                <Section sectionName="aboutMe"/>
                <Section sectionName="portfolio"/>
            </div>
        );
    }
}