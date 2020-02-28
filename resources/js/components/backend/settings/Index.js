import React, {Component} from 'react';
import axios from 'axios';

class Setting extends Component {
	constructor() {
		super();
		this.state = {
			tasks: []
		}
	}

  	componentDidMount() {
  		axios.get("/api/tasks")
	        .then(tasks => {
	        	this.setState({
	        		tasks: tasks.data
	        	});
	        })
	        .catch(errors => {
	        	console.log('err'+errors)
	        })
  	}

  	renderTasks() {
  		if (this.state.tasks.hasOwnProperty('data')) {
	        return this.state.tasks.data.map(task => { 
	            return (
	                <li >{task.name}</li>
	            );
	        })
	    } else {
	    	return (null);
	    }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">My Tasks</div>

                            <div className="card-body">
								{this.renderTasks()}              
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;
