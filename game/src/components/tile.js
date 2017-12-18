import React, { Component } from "react";

// The pictures that the user will click on will go here.
// I will need 12 pictures (tiles) total - 4 rows of 4

class Tile extends Component {
	state = {
		clicked: "no",
		score: 0
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if(this.state.clicked) {
			this.setState({
				clicked : "yes",
				score : +1
			});
		};
		console.log(this.state.clicked);
	};

	render () {
		return (
			<div>
				<h1>Score: {this.state.score}</h1>
				<div className="row">
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/goku.jpg')} style={{ width: '20rem', height: '20rem'}} alt="Goku" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Goku</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/gohan.jpg')} style={{ width: '20rem', height: '20rem'}} alt="Gohan" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Gohan</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/vegeta.jpg')} style={{ width: '20rem', height: '20rem'}} alt="Vegeta" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Vegeta</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/piccolo.jpg')} style={{ width: '20rem', height: '20rem'}} alt="Piccolo" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Piccolo</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/roshi.jpg')} style={{ width: '20rem', height: '20rem'}} alt="Master Roshi" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Master Roshi</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/beerus.png')} style={{ width: '20rem', height: '20rem'}} alt="Lord Beerus" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Lord Beerus</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/17.png')} style={{ width: '20rem', height: '20rem'}} alt="#17" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Android 17</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/18.jpg')} style={{ width: '20rem', height: '20rem'}} alt="#18" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Android 18</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem' }}>
							<img className="card-img-top" src={require('./pictures/krillin.png')} style={{ width: '20rem', height: '20rem'}} alt="Krillin" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked} onClick={this.handleFormSubmit}>Krillin</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
} 

export default Tile;