import React from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import './Preview.css';
import cx from 'classnames';
import { compareDate } from '../../utils/helper';

const Preview = ({ tasks }) => {
	const [active, setActive] = useState(1);

	let tasksArray =
		active === 1
			? tasks.filter((task) => compareDate(task.date, task.time))
			: [...tasks].reverse();

	return (
		<div className='container'>
			<h2>Preview</h2>
			<div className='tabs'>
				<div
					onClick={() => setActive(1)}
					className={cx('common', active === 1 && 'active')}
				>
					Upcoming
				</div>
				<div
					onClick={() => setActive(2)}
					className={cx('common', active === 2 && 'active')}
				>
					All Task
				</div>
			</div>
			<div className='tasks'>
				{tasksArray?.map((task, ind) =>
					active === 1 ? (
						ind < 3 && <Card {...task} />
					) : (
						<Card {...task} />
					),
				)}
			</div>
		</div>
	);
};

export default Preview;
