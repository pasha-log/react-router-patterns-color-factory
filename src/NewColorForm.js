import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
	let history = useHistory();

	const INITIAL_STATE = {
		colorName: '',
		colorValue: '#FFFFFF'
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ ...formData });
		setFormData(INITIAL_STATE);
		history.push('/colors');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="color">Color Name</label>
			<input
				id="color-name"
				type="text"
				name="colorName"
				placeholder="Color Name"
				value={formData.colorName}
				onChange={handleChange}
			/>
			<label htmlFor="">Color Value</label>
			<input
				id="color-value"
				type="color"
				name="colorValue"
				placeholder="Color Value"
				value={formData.colorValue}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Add Color</button>
		</form>
	);
};

export default NewColorForm;
