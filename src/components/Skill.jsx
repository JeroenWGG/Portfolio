import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    
    render() { 
        return ( 
        <React.Fragment>
        <ProgressBar animated variant={this.props.variant} now={this.props.number} label={`${this.props.name}`}/>
        </React.Fragment> );
    }
}
 
export default Skill;