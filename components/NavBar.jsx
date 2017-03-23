import React from "react"; 

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about-me">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="blog">Blog</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
