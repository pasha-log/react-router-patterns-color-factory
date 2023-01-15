import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NewColorForm.css';
import { Helmet } from 'react-helmet';

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
		<div className="Form-page">
			<div className="Form">
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
				<Helmet>
					<style
					>{`body { background-image: url('https://www.pngmagic.com/product_images/beautiful-color-background-images-pngmagic-sm.jpg');
				background-repeat: no-repeat;
				background-size: cover; }`}</style>
				</Helmet>
			</div>
		</div>
	);
};

export default NewColorForm;
