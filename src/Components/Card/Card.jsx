import React from 'react';
import './Card.css';

const Card = ({ task, date, time, des }) => {
	return (
		<div className='card'>
			<div>{task}</div>
			<div>{time}</div>

			{des !== '' && (
				<div className='des'>
					<div>Description</div>
					<p>{des}</p>
					<div>{date}</div>
				</div>
			)}
		</div>
	);
};

export default Card;
