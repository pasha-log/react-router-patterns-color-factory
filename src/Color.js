import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Redirect } from 'react-router-dom';

const Color = ({ colors }) => {
	const { color } = useParams();
	try {
		const theColor = colors.filter((colorObj) => colorObj.colorName === color)[0];
		const value = theColor.colorValue;

		return (
			<div>
				<h1>BEHOLD, {color}</h1>
				<Link to="/colors">GO BACK</Link>
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
