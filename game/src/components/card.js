import React, { Component } from "react";

class Card extends Component {
	constructor (props) {
		super(props)

		this.state = {
			clicked: false
		}
	}

	handleFormSubmit (event) {
		event.preventDefault();
		console.log('here');
		if(!this.state.clicked) {
			console.log('there');
			this.setState({
				clicked : true
				
			});
			this.props.increaseScore();
		};
		console.log(this.state.clicked);
	};

	render () {
		return (
				<div className="col-sm-4">
					<div className="card" style={{ width: '20rem' }}>
						<img className="card-img-top" src={ require(`./pictures/${this.props.src}`) } style={{ width: '20rem', height: '20rem'}} alt={this.props.name} onClick={this.handleFormSubmit.bind(this)} />
						<div className="card-body">
						<p>Goku</p>
						</div>
					</div>
				</div>			
			)
	}
};

export default Card;