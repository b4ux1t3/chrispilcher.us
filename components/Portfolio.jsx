import Section from "./Section.jsx";
import React from 'react';
import Project from './Project.jsx';
import PictureBox from './PictureBox.jsx';

class link{
	constructor(site, url){
		this.site = site;
		this.url = url;

	}
}

 //Within React, you would need to lift the pictureBox state to Portfolio, and pass down the value to PictureBox and an update function to Project. -samsch from #reactjs

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);
		this.state={
			pictureboxImage: ''
		}

		this.updatePictureBox = this.updatePictureBox.bind(this);
    }

	componentWillMount(){
		this.setState({
			pictureboxImage: ''
		})
	}

	updatePictureBox(picture){
        
        this.setState({
			pictureboxImage: picture
		})
    }

    render(){
		let picturebox = <PictureBox src={this.state.pictureboxImage}/>;
        return(
			<div className="container-fluid about_and_edu"id="portfolio">
				<a name="portfolio"></a>
				<div className="about_me_section" >
					<div className="row about_me_header">
						<div className="col-md-12"><h1>PORTFOLIO</h1></div>
					</div>
					<div className="row portfoliobody">
						<div className="col-md-6 col-lg-6 portfolio-picture">
							{picturebox}
						</div>	
						<div className="col-md-6 col-lg-6 portfolio-text">
							<ul>
								<li id="python-projects">
									<h2 className="language-header">Python</h2>
									<ul>
										<li>
											<Project 
												name="Pi Day 2017" 
												links={[
													new link("GitHub", "https://github.com/b4ux1t3/piday2017")
												]}
												description="Approximating Pi by using coprime probabilities between numbers. Uses Python 3.6." 
												picture="./images/piday.png"
												update={this.updatePictureBox}
												/>
										</li>
										<li>
											<Project 
												name="Evolution"
												links={[
													new link("Github", "https://github.com/b4ux1t3/evolution")
												]}
												description="Genetic Algorithm Implementation. Uses Python 2.7."
												picture="./images/evolution.png"
												update={this.updatePictureBox}
												/>
										</li>
									</ul>
								</li>
								<li id="csharp-projects">
									<h2 className="language-header">C#</h2>
									<ul>
										<li>
											<Project 
												name="Simple Life Counter" 
												links={[
													new link("GitHub", "https://github.com/b4ux1t3/simple-life-counter"), 
													new link("Play Store", "https://play.google.com/store/apps/details?id=lifeCounter.lifeCounter&hl=en")
												]}
												description="A life counter for Magic the Gathering." 
												picture="./images/lifecounter.png"
												update={this.updatePictureBox}
												/>
										</li>
									</ul>
								</li>
								<li id="go-projects">
									<h2 className="language-header">Go</h2>
									<ul>
										<li>
											<Project 
												name="libgollatz" 
												links={[
													new link("GitHub", "https://github.com/b4ux1t3/libgollatz")
												]}
												description="A Collatz Conjecture-based stress test library, to simulate load for programs." 
												picture="./images/libgollatz.png"
												update={this.updatePictureBox}
												/>
										</li>
									</ul>
								</li>
								<li id="web-projects">
									<h2 className="language-header">Web</h2>
									<ul>
										<li>
											<Project 
												name="ChrisPilcher.us" 
												links={[
													new link("GitHub", "https://github.com/b4ux1t3/chrispilcher.us")
												]}
												description="This website's code is available online!" 
												picture="./images/page.png"
												update={this.updatePictureBox}
												/>
										</li>
									</ul>
								</li>
							</ul>
						</div>					
					</div> 
				</div>
			</div>
        );
    }
}