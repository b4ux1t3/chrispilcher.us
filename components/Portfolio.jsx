import Section from "./Section.jsx";
import React from 'react';

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
		<div className="container-fluid about_and_edu"id="portfolio">
            <a name="portfolio"></a>
			<div className="about_me_section" >
				<div className="row about_me_header">
					<div className="col-md-12"><h1>PORTFOLIO</h1></div>
				</div>
					<ul>
						<li>
							<h2 className="language-header">Python</h2>
							<ul>
								<li>
									<h3>Evolution</h3>
									<p>Genetic Algorithm Implementation. Uses Python 2.7.</p>
									<p><a href="https://github.com/b4ux1t3/evolution">GitHub</a></p>
								</li>
								<li>
									<h3>Pi Day 2017</h3>
									<p>Approximating Pi by using coprime probabilities between numbers. Uses Python 3.6.</p>
									<p><a href="https://github.com/b4ux1t3/piday2017">GitHub</a></p>
								</li>
							</ul>
						</li>
						<li>
							<h2 className="language-header">C#</h2>
							<ul>
								<li>
									<h3>Simple Life Counter</h3>
									<p>A life counter for Magic the Gathering.</p>
									<p><a href="https://github.com/b4ux1t3/simple-life-counter">GitHub</a> | <a href="https://play.google.com/store/apps/details?id=lifeCounter.lifeCounter&hl=en">Play Store</a></p>
								</li>
							</ul>
						</li>
						<li>
							<h2 className="language-header">Go</h2>
							<ul>
								<li>
									<h3>libgollatz</h3>
									<p>A Collatz Conjecture-based stress test library, to simulate load for programs.</p>
									<p><a href="https://github.com/b4ux1t3/libgollatz">GitHub</a></p>
								</li>
							</ul>
						</li>
						<li>
							<h2 className="language-header">Web</h2>
							<ul>
							<li>
									<h3>ChrisPilcher.us</h3>
									<p>This website's code is available online!</p>
									<p><a href="https://github.com/b4ux1t3/chrispilcher.us">GitHub</a></p>
								</li>
								</ul>
						</li>
					</ul>
				</div>
			</div>
        );
    }
}