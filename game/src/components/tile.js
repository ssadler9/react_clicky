import React from "react";
// The pictures that the user will click on will go here.
// I will need 12 pictures (tiles) total - 4 rows of 3
const Tile = () => (
	<div>
		<div className="row">
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/goku.jpg" alt="Goku" />
					<div className="card-body">
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/goku.jpg" alt="Gohan" />
					<div className="card-body">
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/vegeta.jpg" alt="Vegeta" />
					<div className="card-body">
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/piccolo.jpg" alt="Piccolo" />
					<div className="card-body">
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/roshi.jpg" alt="Master Roshi" />
					<div className="card-body">
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/beerus.jpg" alt="Lord Beerus" />
					<div className="card-body">
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/17.jpg" alt="#17" />
					<div className="card-body">
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/18.jpg" alt="#18" />
					<div className="card-body">
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card" style={{ width: '20rem' }}>
					<img className="card-img-top" src="../../public/assets/pictures/krillin.png" alt="Krillin" />
					<div className="card-body">
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Tile;