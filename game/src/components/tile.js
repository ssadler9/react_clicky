import React, { Component } from "react";

// The pictures that the user will click on will go here.
// I will need 12 pictures (tiles) total - 4 rows of 4

class Tile extends Component {

	state = {
		clicked: false,
		score: 0
	};

	handleInputChange = event => {


		if(this.state.clicked === event.target) {
			this.setState({
				clicked : true
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
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../public/assets/pictures/goku.jpg" alt="Goku" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Goku</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/goku.jpg" alt="Gohan" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Gohan</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/vegeta.jpg" alt="Vegeta" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Vegeta</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/piccolo.jpg" alt="Piccolo" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Piccolo</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/roshi.jpg" alt="Master Roshi" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Master Roshi</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/beerus.jpg" alt="Lord Beerus" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Lord Beerus</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/17.jpg" alt="#17" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Android 17</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../../public/assets/pictures/18.jpg" alt="#18" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Android 18</button>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card" style={{ width: '20rem;' }}>
							<img className="card-img-top" src="../public/assets/pictures/krillin.png" alt="Krillin" />
							<div className="card-body">
							<button className="btn btn-primary" type="submit" value={this.state.clicked}>Krillin</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
} 

export default Tile;