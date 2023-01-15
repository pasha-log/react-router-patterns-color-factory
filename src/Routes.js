import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewColorForm from './NewColorForm';
import Color from './Color';
import ColorsList from './ColorsList';

const defaultColors = [
	{ colorName: 'red', colorValue: '#FF0000' },
	{ colorName: 'green', colorValue: '#00FF00' },
	{ colorName: 'blue', colorValue: '#0000FF' }
];

const Routes = () => {
	const [ colors, setColors ] = useState(defaultColors);
	const addColor = (newColor) => {
		setColors((colors) => [ ...colors, { ...newColor } ]);
	};
	console.log(colors);
	const names = colors.map((color) => color.colorName);
	return (
		<Switch>
			<Route exact path="/colors">
				<ColorsList names={names} />
			</Route>
			<Route exact path="/colors/new">
				<NewColorForm addColor={addColor} />
			</Route>
			<Route exact path="/colors/:color">
				<Color colors={colors} />
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
};

export default Routes;
