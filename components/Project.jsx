import React from "react";
import ReactDOM from "react-dom";

// Project will represent an individual project as portrayed in the Portfolio section of the page.

// It will have four props (to begin with):
//   1. Name: The name of the project
//   2. Picture: An <img /> of the project in action
//   3. Description: A brief description of the project.
//   4. Links: The Github/Play Store/Whatever links to the project
//       This will be represented by an object with a few keys representing the sites and then the link
//       as the value. Ex:
//       {
//         'GitHub': 'https://github.com/b4ux1t3/simple-life-counter',
//         'Play Store': 'https://play.google.com/store/apps/details?id=lifeCounter.lifeCounter&hl=en'
//       }

// When a user mouses over the project, the image will appear next to it.
// The image will be clickable, and will open up a larger version of the image.

export default class Project extends React.Component{
    constructor(props){
        super(props);

        this.sendToImageBox = this.sendToImageBox.bind(this);
        this.clearImageBox = this.clearImageBox.bind(this);
        
    }

    sendToImageBox(){
        this.props.update(this.props.picture);
    }

    clearImageBox(){
        
        this.props.update('');
    }

    

    render(){

        return (
            <div className="project" onMouseEnter={this.sendToImageBox} onMouseLeave={this.clearImageBox}>
                <h3 className="project-title">{this.props.name}</h3> 
                    <p className="project-description">{this.props.description}</p>
                    <p className="project-links">
                        {this.props.links.map((link, key)=>{ 
                            return (<span><a key={key} href={link.url}>>{link.site}</a>  </span>)
                        })}
                    </p>
                    
                    {/*<img className="project-picture" src={this.props.picture} /> */}
                    
            </div>
        );
    }
}