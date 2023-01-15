import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Rainbow from './rainbow.png';
import './ColorsList.css';
import { Helmet } from 'react-helmet';

const ColorsList = ({ names }) => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand>
						{<img alt="logo" className="Logo" src={Rainbow} />} Welcome to the color factory.
					</Navbar.Brand>
					<NavLink exact to="/colors/new">
						Add a color
					</NavLink>
				</Container>
			</Navbar>
			<div className="Colors">
				<ul className="Color-list">
					<p>Please select a color.</p>
					{names.map((color) => (
						<li key={color}>
							<Link to={`/colors/${color}`}>{color}</Link>
						</li>
					))}
				</ul>
			</div>
			<Helmet>
				<style
				>{`body { background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Hue_alpha_falloff.svg/1200px-Hue_alpha_falloff.svg.png');
				background-repeat: no-repeat;
				background-size: cover; }`}</style>
			</Helmet>
		</div>
	);
};

export default ColorsList;
