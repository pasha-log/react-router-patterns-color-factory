import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Redirect } from 'react-router-dom';
import './Color.css';

const Color = ({ colors }) => {
	const { color } = useParams();
	try {
		const theColor = colors.filter((colorObj) => colorObj.colorName === color)[0];
		const value = theColor.colorValue;

		return (
			<div className="Color-container">
				<div className="Behold-color">
					<h1>BEHOLD, {color}</h1>
					<Link to="/colors">GO BACK</Link>
				</div>
				<Helmet>
					<style>{`body { background-color: ${value}; }`}</style>
				</Helmet>
			</div>
		);
	} catch (e) {
		return <Redirect to="/colors" />;
	}
};

export default Color;
