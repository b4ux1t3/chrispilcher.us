import Section from "./Section.jsx";
import React from 'react';

export default class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
		<div className="container-fluid about_and_edu">
            <a name="about-me"></a>
			<div className="about_me_section">
				<div className="row about_me_header">
					<div className="col-md-12"><h1>ABOUT ME</h1></div>
				</div>
				<div className="row">
					<article className="biography">I am a self-taught programmer who recently went
					back to school in order to get a degree in Software Development. I have
					been contributing to various open source projects for the past five years. What I lack in professional experience I make up for in drive and determination, as well as a willingness and desire to learn. I work well with others and am very good at communicating highly technical information concisely and understandably.</article>
					<article className="biography">My hobbies include traveling, running, hiking, video games, and a bit of amateur photography. Oh, and programming. Lots of that.
					</article>
				</div>
			</div>
             <div className="education_section">
				<div className="row">
					<h2 className="education_header">EDUCATION</h2>
				</div>
				<div className="row>">
					<div className="col-md-12 education_history">
						<h3>College Education</h3>
						<ul>
							<p>Strayer University</p>
							<li>Bachelor's Degree in Programming Technology</li>
							<li>Dates Attended: October 2016 to Present</li>
							<li>Expected Graduation: January 2018</li>
							<p>ITT Technical Institute</p>
							<li>Associate's Degree in Software Development</li> 
							<li>Dates Attended: June 2014 to March 2016</li>
						</ul>		
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 extracurriculars">
						<h3>Extracurricular coursework</h3>
						<p>Every now and then I'll enroll in online courses to learn more about anything that interests me.</p>
						<ul>
							<a href="https://edx.org"><li>Edx</li></a>
							<a href="https://coursera.com"><li>Coursera</li></a>
							<a href="https://udacity.com"><li>Udacity</li></a>
							<a href="hjttps://khanacademy.org"><li>Khan Academy</li></a>
						</ul>
					</div>
				</div>
			</div>
        </div>
        );
    }
}