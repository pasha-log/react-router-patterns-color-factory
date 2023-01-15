import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const ColorsList = ({ names }) => {
	return (
		<div>
			<h2>Welcome to the color factory.</h2>
			<NavLink exact to="/colors/new">
				Add a color
			</NavLink>
			<p>Please select a color.</p>
			<ul>
				{names.map((color) => (
					<li key={color}>
						<Link to={`/colors/${color}`}>{color}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ColorsList;
