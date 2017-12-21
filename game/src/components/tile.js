import React, { Component } from "react";
import Card from "./card";

// The pictures that the user will click on will go here.
// I will need 12 pictures (tiles) total - 4 rows of 4

class Tile extends Component {
	state = {
		score: 0,
		cards: [ 
				 {	src: 'goku.jpg',
				 	name: 'Goku'
				 },
				 {
				 	src: 'gohan.jpg',
				 	name: 'Gohan'
				 },
				 {
				 	src: 'vegeta.jpg',
				 	name:'Vegeta'
				 },
				 {
				 	src: 'piccolo.jpg',
				 	name: 'Piccolo'
				 },
				 {
				 	src: 'roshi.jpg',
				 	name: 'Master Roshi'
				 },
				 {
				 	src: 'beerus.png',
				 	name: "Lord Beerus"
				 },
				 {
				 	src: '17.png',
				 	name: 'Android 17'
				 },
				 {
				 	src: '18.jpg',
				 	name: 'Android 18'
				 },
				 {
				 	src: 'krillin.png',
				 	name: 'Krillin'
				 }
				]
	};

	

	render () {
		const cards = this.state.cards.map((card, index) => {
			return <Card src={card.src} name={card.name} key={index} increaseScore={() => this.setState({score: this.state.score +1})} />
		})
		return (
			<div>
				<h1>Score: {this.state.score}</h1>
				<div className='row'>
					{cards}
				</div>
			</div>
		);
	}
} 

export default Tile;