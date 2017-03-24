import React from "react";
import NavBar from "./Navbar.jsx";
import Section from "./Section.jsx";
import AboutMe from "./AboutMe.jsx";
import Title from "./Title.jsx";
import Portfolio from "./Portfolio.jsx";

// Page represents the page as a whole, much like App usually represents an application
export default class Page extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <NavBar />
                <Section sectionName="title" content={<Title />}/>
                <Section sectionName="aboutMe" content={<AboutMe />}/>
                <Section sectionName="portfolio" content={<Portfolio />}/>
            </div>
        );
    }
}