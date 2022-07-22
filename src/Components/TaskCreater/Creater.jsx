import React from 'react';
import { useState } from 'react';
import { validation } from '../../utils/helper';
import './Creater.css';

const Creater = ({ updateTasks }) => {
	const [payload, setPayload] = useState({
		task: '',
		date: '',
		time: '',
	});
	const [play, setPlay] = useState(false);

	const handleChange = (e) => {
		setPlay(false);
		const { name, value } = e.target;
		setPayload({ ...payload, [name]: value });
	};

	const handleCreate = () => {
		// if (!validation(payload.task, 'task')) return;
		// if (!validation(payload.date, 'date')) return;
		// if (!validation(payload.time, 'time')) return;

		updateTasks(payload);
		setPlay(true);
	};

	return (
		<div>
			<h2>Task Creater</h2>
			<div className='form'>
				<label htmlFor=''>Task Name</label>
				<input
					type='text'
					placeholder='Enter your task'
					name='task'
					onChange={handleChange}
				/>

				<label htmlFor=''>Task Description (optional)</label>
				<textarea
					type='text'
					placeholder='Description'
					name='des'
					onChange={handleChange}
				/>

				<div className='date-time'>
					<div>
						<label htmlFor=''>Date</label>
						<input
							type='date'
							name='date'
							placeholder=''
							onChange={handleChange}
						/>
					</div>

					<div>
						<label htmlFor=''>Time</label>
						<input
							type='time'
							name='time'
							placeholder=''
							onChange={handleChange}
						/>
					</div>
				</div>

				<button onClick={handleCreate}>Create</button>
				{play && (
					<div className='animation-div'>
						<h3>{payload.task}</h3>
						<h3>{payload.des}</h3>
						<h3>{payload.date}</h3>
						<h3>{payload.time}</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Creater;
